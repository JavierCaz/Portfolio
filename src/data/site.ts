import type { ProjectLanguage } from './projects';

export type Lang = ProjectLanguage;

export const languages: Lang[] = ['en', 'es'];

/** English lives at the root; Spanish under /es/ so each language gets its own indexable URL. */
export const homePath = (lang: Lang) => (lang === 'es' ? '/es/' : '/');
export const projectPath = (lang: Lang, slug: string) => (lang === 'es' ? `/es/proyectos/${slug}/` : `/projects/${slug}/`);

export const ogLocale: Record<Lang, string> = { en: 'en_US', es: 'es_MX' };

export const socialProfiles = [
	'https://github.com/javiercaz',
	'https://www.linkedin.com/in/javiercaz',
	'https://www.instagram.com/cazjavier',
	'https://www.tiktok.com/@javicazares',
];

const address = { '@type': 'PostalAddress', addressLocality: 'Ciudad Juárez', addressRegion: 'Chihuahua', addressCountry: 'MX' };

/** The border region the services are pitched to: northern Mexico and the southern US. */
const areaServed = [
	{ '@type': 'City', name: 'Ciudad Juárez, Chihuahua' },
	{ '@type': 'City', name: 'Chihuahua, Chihuahua' },
	{ '@type': 'City', name: 'El Paso, Texas' },
	{ '@type': 'City', name: 'Las Cruces, New Mexico' },
	...['Chihuahua', 'Sonora', 'Coahuila', 'Nuevo León', 'Tamaulipas', 'Baja California'].map((name) => ({ '@type': 'State', name, containedInPlace: { '@type': 'Country', name: 'Mexico' } })),
	...['Texas', 'New Mexico', 'Arizona', 'California'].map((name) => ({ '@type': 'State', name, containedInPlace: { '@type': 'Country', name: 'United States' } })),
];

/** schema.org graph for the home page: who Javier is and the software service he offers. */
export const homeStructuredData = (site: URL, lang: Lang, copy: { description: string; services: { title: string; body: string }[] }) => {
	const url = new URL(homePath(lang), site).href;
	const personId = new URL('/#person', site).href;
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': personId,
				name: 'Javier Cazares',
				url: site.href,
				image: new URL('/images/javier-portrait.webp', site).href,
				jobTitle: lang === 'es' ? 'Desarrollador de software' : 'Software Developer',
				address,
				knowsLanguage: ['es', 'en'],
				sameAs: socialProfiles,
			},
			{
				'@type': 'ProfessionalService',
				'@id': new URL('/#service', site).href,
				name: lang === 'es' ? 'Javier Cazares — Desarrollo de software a la medida' : 'Javier Cazares — Custom Software Development',
				description: copy.description,
				url,
				image: new URL('/og.png', site).href,
				founder: { '@id': personId },
				address,
				areaServed,
				availableLanguage: ['Spanish', 'English'],
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: lang === 'es' ? 'Servicios' : 'Services',
					itemListElement: copy.services.map((service) => ({
						'@type': 'Offer',
						itemOffered: { '@type': 'Service', name: service.title, description: service.body },
					})),
				},
			},
			{
				'@type': 'WebSite',
				'@id': new URL('/#website', site).href,
				url: site.href,
				name: 'Javier Cazares',
				inLanguage: ['en', 'es'],
				publisher: { '@id': personId },
			},
		],
	};
};
