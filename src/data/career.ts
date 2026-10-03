import type { ProjectLanguage } from './projects';

type Localized = Record<ProjectLanguage, string>;

export type CareerEntry = {
	/** Short decorative commit hash. */
	hash: string;
	/** 0 = main, 1 = a side branch (university) that runs in parallel and merges back later. */
	lane: 0 | 1;
	kind: 'work' | 'learning';
	period: Localized;
	/** Commit subject: role for work entries, milestone for learning ones. */
	title: Localized;
	company?: string;
	body: Localized;
	tags?: string[];
	refs?: string[];
	/** Name of the branch merged into main at this commit. */
	merge?: string;
};

/** Newest first, like `git log`. */
export const careerLog: CareerEntry[] = [
	{
		hash: 'f4d2e17',
		lane: 0,
		kind: 'work',
		refs: ['HEAD -> main'],
		period: { en: '2026 — Present', es: '2026 — Actualidad' },
		title: { en: 'Freelance Developer', es: 'Desarrollador Freelance' },
		body: {
			en: 'Right now I’m focused on building my personal brand and taking on projects independently.',
			es: 'Ahora estoy enfocado en construir mi marca personal y llevar a cabo proyectos de forma independiente.',
		},
	},
	{
		hash: 'a3f9c21',
		lane: 0,
		kind: 'work',
		merge: 'university',
		period: { en: '2022 — 2026', es: '2022 — 2026' },
		title: { en: 'Sr. Web Consultant', es: 'Sr. Web Consultant' },
		company: 'Apex Systems',
		body: {
			en: 'This is where I matured the most as a professional, working on development projects alongside international teams. It pushed both my technical and soft skills to the next level, always focused on building effective, high-impact web solutions.',
			es: 'Durante esta etapa he madurado significativamente como profesional, participando en proyectos de desarrollo junto a equipos internacionales. Esta experiencia me permitió llevar tanto mis habilidades técnicas como blandas al siguiente nivel, siempre con un enfoque en la creación de soluciones web efectivas y de alto impacto.',
		},
	},
	{
		hash: '7be1d04',
		lane: 0,
		kind: 'work',
		period: { en: '2021 — 2022', es: '2021 — 2022' },
		title: { en: 'Application Developer', es: 'Desarrollador de Aplicaciones' },
		company: 'Bosch',
		body: {
			en: 'I joined a large, well-established team, which taught me how much teamwork and clear communication matter. At the same time I kept sharpening my technical skills with modern web tooling, with a special focus on Angular and .NET APIs.',
			es: 'Colaboré en una empresa con un equipo amplio y consolidado, lo que me permitió comprender mejor la importancia del trabajo en equipo y la comunicación efectiva. Al mismo tiempo, continué fortaleciendo mis habilidades técnicas utilizando herramientas modernas de desarrollo web, con un enfoque especial en Angular y APIs en .NET.',
		},
		tags: ['Angular', '.NET'],
	},
	{
		hash: '5c2e8a9',
		lane: 0,
		kind: 'work',
		period: { en: '2020 — 2021', es: '2020 — 2021' },
		title: { en: 'Software Developer', es: 'Software Developer' },
		company: 'Aptiv',
		body: {
			en: 'My first step into large-scale projects at an established company. I built tools that optimized specific internal processes and made the workflow more efficient. Along the way I went deep into the Microsoft technology ecosystem, working on robust, scalable enterprise solutions.',
			es: 'Esta posición marcó mi entrada a trabajar en proyectos a gran escala dentro de una empresa consolidada. Mi rol consistió en desarrollar herramientas que optimizaron procesos internos específicos, generando mayor eficiencia en el flujo de trabajo. Durante esta etapa, fortalecí mis habilidades utilizando el ecosistema de tecnologías de Microsoft, lo que me permitió profundizar en soluciones empresariales robustas y escalables.',
		},
		tags: ['Microsoft'],
	},
	{
		hash: '19d4f70',
		lane: 0,
		kind: 'work',
		period: { en: '2019 — 2020', es: '2019 — 2020' },
		title: { en: 'Web Developer', es: 'Desarrollador Web' },
		company: 'InteliGene Medical Technologies',
		body: {
			en: 'I joined this startup as a full-stack developer and took part in every phase of the web development cycle: from database design and backend implementation to frontend interfaces and cloud deployment. It gave me an end-to-end view of building software and sharpened my skills in a dynamic, fast-growing environment.',
			es: 'Colaboré en esta startup como desarrollador full stack, participando en todas las fases del ciclo de desarrollo web: desde el diseño de bases de datos y la implementación de backend, hasta la creación de interfaces frontend y el despliegue en la nube. Esta experiencia me permitió tener una visión integral del desarrollo de software y fortalecer mis habilidades en entornos dinámicos y de rápido crecimiento.',
		},
		tags: ['Database', 'Backend', 'Frontend', 'Cloud'],
	},
	{
		hash: 'e81b3c2',
		lane: 1,
		kind: 'learning',
		refs: ['university'],
		period: { en: '2016 — 2022', es: '2016 — 2022' },
		title: { en: 'Computer Systems Engineering', es: 'Ingeniería en Sistemas Computacionales' },
		body: {
			en: 'In 2016 I started my degree in Computer Systems Engineering. I went deeper into software, databases, and web and mobile development, but also into networking, hardware, and the rest of the field around them.',
			es: 'En 2016 entré a la carrera de Ingeniería en Sistemas Computacionales. Aprendí más sobre software, bases de datos, desarrollo web y móvil, pero también sobre redes, hardware y demás temas relacionados.',
		},
		tags: ['Software', 'Databases', 'Web', 'Mobile', 'Networking', 'Hardware'],
	},
	{
		hash: '4a0d9e1',
		lane: 0,
		kind: 'learning',
		period: { en: '2013 — 2016', es: '2013 — 2016' },
		title: { en: 'High school, programming track', es: 'Preparatoria, especialidad en programación' },
		body: {
			en: 'When I started high school I chose programming as my specialty. That is where I learned the foundations of object-oriented programming and basic logic.',
			es: 'Cuando entré a la preparatoria elegí la especialidad de programación. Ahí aprendí las bases de la programación orientada a objetos y la lógica básica.',
		},
		tags: ['OOP', 'Logic'],
	},
	{
		hash: '0c7f2b8',
		lane: 0,
		kind: 'learning',
		period: { en: '≈ 2010 — 2012', es: '≈ 2010 — 2012' },
		title: { en: 'init: my big brother’s projects', es: 'init: los proyectos de mi hermano' },
		body: {
			en: 'It all started with my older brother. He is also a computer systems engineer, focused on video game development. His work always made me curious, and when he came to visit he would show me a bit of the projects he was working on. That is where my interest in software began. I started out watching videos on YouTube.',
			es: 'Todo comenzó por mi hermano mayor. Él también es ingeniero en sistemas computacionales, pero con un enfoque en el desarrollo de videojuegos. Siempre me causó mucha curiosidad su trabajo y, cuando venía de visita, me enseñaba un poco de los proyectos en los que estaba. Ahí empezó mi interés por el software. Inicié viendo videos en YouTube.',
		},
		tags: ['Curiosity', 'YouTube'],
	},
];
