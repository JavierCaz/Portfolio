// Cloudflare Pages Function: POST /api/contact
// Verifies Turnstile, then forwards the message to Javier via Resend.

interface Env {
	RESEND_API_KEY: string;
	TURNSTILE_SECRET_KEY: string;
	CONTACT_TO: string;
	CONTACT_FROM?: string;
}

const MAX_IDEA_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: Record<string, unknown>, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const escapeHtml = (value: string) =>
	value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: 'invalid_body' }, 400);
	}

	// Honeypot: real visitors never see or fill this field.
	if (String(form.get('website') ?? '').trim()) return json({ ok: true });

	const idea = String(form.get('idea') ?? '').trim();
	const email = String(form.get('email') ?? '').trim();
	const token = String(form.get('cf-turnstile-response') ?? '');

	if (!idea) return json({ ok: false, error: 'empty' }, 400);
	if (idea.length > MAX_IDEA_LENGTH) return json({ ok: false, error: 'too_long' }, 400);
	if (email && !EMAIL_PATTERN.test(email)) return json({ ok: false, error: 'invalid_email' }, 400);
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

	const sent = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
		body: JSON.stringify({
			from: env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
			to: [env.CONTACT_TO],
			reply_to: email || undefined,
			subject: `> new idea from ${email || 'anonymous'}`,
			text: `${idea}\n\n— ${email || 'no reply address given'}`,
			html: `<pre style="font-family:monospace;white-space:pre-wrap">${escapeHtml(idea)}</pre><p style="font-family:monospace">— ${escapeHtml(email || 'no reply address given')}</p>`,
		}),
	});
	if (!sent.ok) return json({ ok: false, error: 'send_failed' }, 502);

	return json({ ok: true });
};
