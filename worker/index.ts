// Cloudflare Worker. Static files in dist/ are served by the assets binding;
// only /api/* and the English pages reach this script (see run_worker_first in wrangler.jsonc).
// POST /api/contact verifies Turnstile, then forwards the message via Resend.

import { budgetLabel, isCurrency } from '../src/data/budget';

interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> };
	RESEND_API_KEY: string;
	TURNSTILE_SECRET_KEY: string;
	CONTACT_TO: string;
	CONTACT_FROM?: string;
}

const MAX_IDEA_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Optional project-brief fields. Choice values must match the option keys in src/data/home.ts.
const CHOICES: Record<string, string[]> = {
	timeline: ['asap', '1-3m', '3-6m', 'flexible'],
	devices: ['desktop', 'mobile', 'offline', 'unsure'],
	access: ['internal', 'internet', 'unsure'],
	infra: ['have', 'propose', 'unsure'],
};
const TEXT_LIMITS: Record<string, number> = { company: 500, deadline: 500, users: 500, current: 500, integrations: 500, mvp: 2000 };
// Email rows: [label, value]. Order is the order Javier reads them in.
const BRIEF_ROWS: [string, (brief: Record<string, string>) => string][] = [
	['who', (b) => b.company],
	['budget', (b) => b.budget],
	['timeline', (b) => [b.timeline, b.deadline && `(${b.deadline})`].filter(Boolean).join(' ')],
	['users', (b) => b.users],
	['current_process', (b) => b.current],
	['integrations', (b) => b.integrations],
	['must_have_v1', (b) => b.mvp],
	['devices', (b) => b.devices],
	['access', (b) => b.access],
	['infra', (b) => b.infra],
];

const json = (body: Record<string, unknown>, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const escapeHtml = (value: string) =>
	value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

const handleContact = async (request: Request, env: Env) => {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: 'invalid_body' }, 400);
	}

	// Multipart bodies carry textarea newlines as CRLF; normalize so the email indents cleanly.
	const text = (name: string) => String(form.get(name) ?? '').replace(/\r\n?/g, '\n').trim();

	// Honeypot: real visitors never see or fill this field.
	if (String(form.get('website') ?? '').trim()) return json({ ok: true });

	const idea = text('idea');
	const email = String(form.get('email') ?? '').trim();
	const token = String(form.get('cf-turnstile-response') ?? '');

	if (!idea) return json({ ok: false, error: 'empty' }, 400);
	if (idea.length > MAX_IDEA_LENGTH) return json({ ok: false, error: 'too_long' }, 400);
	if (!EMAIL_PATTERN.test(email)) return json({ ok: false, error: 'invalid_email' }, 400);

	const brief: Record<string, string> = {};
	for (const [name, limit] of Object.entries(TEXT_LIMITS)) {
		const value = text(name);
		if (value.length > limit) return json({ ok: false, error: 'too_long' }, 400);
		brief[name] = value;
	}
	// Radios send one value, checkboxes (devices) several; keep only allowlisted ones, in allowlist order.
	for (const [name, allowed] of Object.entries(CHOICES)) {
		const values = form.getAll(name).map(String);
		brief[name] = allowed.filter((value) => values.includes(value)).join(', ');
	}
	// Budget arrives as a slider index plus currency; an invalid pair is dropped like a bad choice.
	const currency = String(form.get('currency') ?? '');
	const budgetIndex = String(form.get('budget') ?? '');
	brief.budget = (/^\d+$/.test(budgetIndex) && isCurrency(currency) && budgetLabel(Number(budgetIndex), currency)) || '';

	if (!token) return json({ ok: false, error: 'captcha' }, 400);

	const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		body: new URLSearchParams({
			secret: env.TURNSTILE_SECRET_KEY,
			response: token,
			remoteip: request.headers.get('CF-Connecting-IP') ?? '',
		}),
	});
	const { success } = (await verification.json()) as { success: boolean };
	if (!success) return json({ ok: false, error: 'captcha' }, 403);

	const width = Math.max(...BRIEF_ROWS.map(([label]) => label.length)) + 2;
	const rows = BRIEF_ROWS.map(([label, read]) => [label, read(brief)] as const)
		.filter(([, value]) => value)
		.map(([label, value]) => `${`${label}:`.padEnd(width)}${value.replace(/\n/g, `\n${' '.repeat(width)}`)}`);
	const body = [
		'> new project brief',
		'',
		'idea:',
		idea.replace(/^/gm, '  '),
		'',
		...rows,
		`${'reply_to:'.padEnd(width)}${email}`,
	].join('\n');

	const sent = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
		body: JSON.stringify({
			from: env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
			to: [env.CONTACT_TO],
			reply_to: email,
			subject: `> new idea from ${brief.company || email}${brief.budget ? ` [${brief.budget}]` : ''}`,
			text: body,
			html: `<pre style="font-family:monospace;white-space:pre-wrap">${escapeHtml(body)}</pre>`,
		}),
	});
	if (!sent.ok) return json({ ok: false, error: 'send_failed' }, 502);

	return json({ ok: true });
};

// Workers runtime global; declared here because the project doesn't pull in @cloudflare/workers-types.
declare const HTMLRewriter: {
	new (): {
		on(selector: string, handlers: { element(element: { setAttribute(name: string, value: string): void }): void }): {
			transform(response: Response): Response;
		};
	};
};

// English pages route through here so LanguageRedirect can also use the visitor's country,
// exposed as <html data-country="MX">. The page stays static; only the attribute is added.
const tagCountry = async (request: Request, env: Env) => {
	const response = await env.ASSETS.fetch(request);
	const country = (request as Request & { cf?: { country?: string } }).cf?.country ?? '';
	if (!/^[A-Z]{2}$/.test(country) || !response.headers.get('content-type')?.includes('text/html')) return response;
	return new HTMLRewriter().on('html', { element: (html) => html.setAttribute('data-country', country) }).transform(response);
};

export default {
	async fetch(request: Request, env: Env) {
		const { pathname } = new URL(request.url);
		if (pathname === '/api/contact') {
			if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405);
			return handleContact(request, env);
		}
		if (!pathname.startsWith('/api/')) return tagCountry(request, env);
		return env.ASSETS.fetch(request);
	},
};
