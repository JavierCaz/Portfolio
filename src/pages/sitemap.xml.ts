import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { homePath, languages, projectPath, type Lang } from '../data/site';

// Every page exists in both languages; each <url> lists its translations so search engines pair them.
const pages: Record<Lang, string>[] = [
	{ en: homePath('en'), es: homePath('es') },
	...projects.map((project) => ({ en: projectPath('en', project.slug), es: projectPath('es', project.slug) })),
];

export const GET: APIRoute = ({ site }) => {
	const absolute = (path: string) => new URL(path, site).href;
	const urls = pages.flatMap((alternates) =>
		languages.map((lang) => {
			const links = [
				...languages.map((language) => `<xhtml:link rel="alternate" hreflang="${language}" href="${absolute(alternates[language])}"/>`),
				`<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(alternates.en)}"/>`,
			];
			return `<url><loc>${absolute(alternates[lang])}</loc>${links.join('')}</url>`;
		}),
	);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
	return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
