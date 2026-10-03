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
	/** Paragraphs separated by a blank line (`\n\n`). */
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
			en: [
				'After several years working within teams and companies of different sizes, I decided to start a more independent stage.',
				'Right now I am focused on building my personal brand, developing my own projects and working directly with clients to create software solutions that solve real problems.',
				'It is also a stage for experimenting more: turning ideas into products, making decisions from start to finish and learning not only about development, but also about business, communication and everything it takes to move a project forward on my own.',
				'My goal is to keep building solutions independently and, little by little, grow both my projects and my personal brand.',
			].join('\n\n'),
			es: [
				'Después de varios años trabajando dentro de equipos y empresas de distintos tamaños, decidí comenzar una etapa más independiente.',
				'Ahora estoy enfocado en construir mi marca personal, desarrollar proyectos propios y colaborar directamente con clientes para crear soluciones de software que resuelvan problemas reales.',
				'También es una etapa de experimentar más: convertir ideas en productos, tomar decisiones de principio a fin y aprender no solo sobre desarrollo, sino también sobre negocio, comunicación y todo lo que implica sacar adelante un proyecto por cuenta propia.',
				'Mi objetivo es seguir construyendo soluciones de manera independiente y, poco a poco, hacer crecer tanto mis proyectos como mi marca personal.',
			].join('\n\n'),
		},
		tags: ['Freelance', 'Personal Brand', 'Products', 'Entrepreneurship'],
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
			en: [
				'This has been the stage where I have most consolidated my level as a professional developer.',
				'I had the chance to work on projects for international companies like Dell and Milwaukee, alongside teams of very experienced people with a very high technical level. Being surrounded by profiles like that helped me learn constantly and raise my own standard of work.',
				'It was also an important stage for strengthening my English communication skills and working more comfortably within international teams.',
				'On the technical side, I went deeper into different technologies, took on projects with very different needs and developed a better way of analyzing problems, making decisions and finding solutions based on the context.',
				'This is where I finished consolidating many of the skills that define how I work as a developer today.',
			].join('\n\n'),
			es: [
				'Esta ha sido la etapa en la que más he consolidado mi nivel como desarrollador profesional.',
				'Tuve la oportunidad de colaborar en proyectos para empresas internacionales como Dell y Milwaukee, trabajando con equipos formados por personas con mucha experiencia y un nivel técnico muy alto. Estar rodeado de perfiles así me ayudó a aprender constantemente y a elevar mi propio estándar de trabajo.',
				'También fue una etapa importante para fortalecer mis habilidades de comunicación en inglés y desenvolverme con mayor soltura dentro de equipos internacionales.',
				'En lo técnico, pude profundizar en distintas tecnologías, enfrentar proyectos con necesidades muy diferentes y desarrollar una mejor forma de analizar problemas, tomar decisiones y encontrar soluciones según el contexto.',
				'Aquí terminé de consolidar muchas de las habilidades que hoy definen mi forma de trabajar como desarrollador.',
			].join('\n\n'),
		},
		tags: ['Consulting', 'International Teams', 'English', 'Web Development', 'Seniority'],
	},
	{
		hash: '7be1d04',
		lane: 0,
		kind: 'work',
		period: { en: '2021 — 2022', es: '2021 — 2022' },
		title: { en: 'Application Developer', es: 'Desarrollador de Aplicaciones' },
		company: 'Bosch',
		body: {
			en: [
				'This stage was a chance to specialize further within a team dedicated specifically to software development.',
				'Working with a larger, well-established team helped me keep polishing not only my technical skills, but also others just as important in a professional environment: communication, collaboration, organization and coordination between different profiles.',
				'At the same time, I kept going deeper into web application development, mainly with Angular and .NET APIs, working on projects with increasingly mature structures and processes.',
				'It was a stage of consolidation: to keep growing as a developer, but also to better understand what it means to be part of a professional software team.',
			].join('\n\n'),
			es: [
				'Esta etapa fue una oportunidad para especializarme más dentro de un equipo dedicado específicamente al desarrollo de software.',
				'Trabajar con un equipo más amplio y consolidado me ayudó a seguir puliendo no solo mis habilidades técnicas, sino también otras igual de importantes dentro de un entorno profesional: comunicación, colaboración, organización y coordinación entre diferentes perfiles.',
				'Al mismo tiempo, continué profundizando en el desarrollo de aplicaciones web, principalmente con Angular y APIs en .NET, trabajando sobre proyectos con estructuras y procesos cada vez más maduros.',
				'Fue una etapa de consolidación: seguir creciendo como desarrollador, pero también entender mejor lo que significa formar parte de un equipo de software profesional.',
			].join('\n\n'),
		},
		tags: ['Angular', '.NET', 'Teamwork', 'Software Engineering'],
	},
	{
		hash: '5c2e8a9',
		lane: 0,
		kind: 'work',
		period: { en: '2020 — 2021', es: '2020 — 2021' },
		title: { en: 'Software Developer', es: 'Software Developer' },
		company: 'Aptiv',
		body: {
			en: [
				'This was my first experience working inside an international company and also my first step into projects of a much larger scale.',
				'Here I understood that developing software inside a large organization involves much more than solving a technical problem. I learned to work with more complex processes, rigorous protocols and the different layers of organization needed for so many people, teams and systems to operate in a coordinated way.',
				'My work focused mainly on building tools to optimize internal processes, while I went deeper into the Microsoft technology ecosystem.',
				'More than a stage of learning one particular technology, it was an experience that helped me understand how software is built and maintained within a much larger enterprise structure.',
			].join('\n\n'),
			es: [
				'Esta fue mi primera experiencia trabajando dentro de una empresa internacional y también mi primer acercamiento a proyectos de una escala mucho mayor.',
				'Aquí entendí que desarrollar software dentro de una organización grande implica mucho más que resolver un problema técnico. Aprendí a trabajar con procesos más complejos, protocolos rigurosos y diferentes capas de organización necesarias para que tantas personas, equipos y sistemas puedan operar de manera coordinada.',
				'Mi trabajo estuvo enfocado principalmente en desarrollar herramientas para optimizar procesos internos, mientras profundizaba en el ecosistema de tecnologías de Microsoft.',
				'Más que una etapa de aprender una tecnología en particular, fue una experiencia que me ayudó a entender cómo se construye y mantiene software dentro de una estructura empresarial mucho más grande.',
			].join('\n\n'),
		},
		tags: ['Enterprise', 'Microsoft', 'Processes', 'Scale'],
	},
	{
		hash: '19d4f70',
		lane: 0,
		kind: 'work',
		period: { en: '2019 — 2020', es: '2019 — 2020' },
		title: { en: 'Web Developer', es: 'Desarrollador Web' },
		company: 'InteliGene Medical Technologies',
		body: {
			en: [
				'Alongside my university studies, I got involved in a local startup where I had the chance to put into practice much of what I had learned in the classroom up to that point.',
				'This is where I started working with modern web technologies used in real projects and to better understand everything that developing software involves beyond writing code.',
				'I worked as a full-stack developer on different parts of the product, from databases and backend to frontend interfaces and deployment. But above all, I learned how people collaborate on a software project, how the different stages of development are organized and how many of the ideas I had studied in theory applied in a real environment.',
				'It was my first experience building software that had to work outside the classroom.',
			].join('\n\n'),
			es: [
				'De manera paralela a mis estudios universitarios, me involucré en una startup local donde tuve la oportunidad de poner en práctica mucho de lo que hasta entonces había aprendido dentro de los salones.',
				'Aquí fue donde empecé a trabajar con tecnologías web modernas utilizadas en proyectos reales y a entender mejor todo lo que implica desarrollar software más allá de escribir código.',
				'Participé como desarrollador full stack en distintas partes del producto, desde bases de datos y backend hasta interfaces frontend y despliegue. Pero, sobre todo, aprendí cómo se colabora dentro de un proyecto de software, cómo se organizan las diferentes etapas de desarrollo y cómo muchas de las ideas que había estudiado de forma teórica se aplicaban en un entorno real.',
				'Fue mi primer acercamiento a construir software que tenía que funcionar fuera del salón de clases.',
			].join('\n\n'),
		},
		tags: ['Full Stack', 'Web', 'Collaboration', 'Startup'],
	},
	{
		hash: 'e81b3c2',
		lane: 1,
		kind: 'learning',
		refs: ['university'],
		period: { en: '2016 — 2022', es: '2016 — 2022' },
		title: { en: 'Computer Systems Engineering', es: 'Ingeniería en Sistemas Computacionales' },
		body: {
			en: [
				'When the time came to choose the profession I would dedicate the next years of my life to, honestly, it was not a very hard decision.',
				'My curiosity for computing had kept growing over the previous years and, by then, I was pretty sure I wanted to build my professional profile around it.',
				'In my degree I went much deeper into programming: algorithms, data structures, quality assurance, databases and the different layers that make up a software system. I also explored different branches of development, like web, mobile and artificial intelligence.',
				'But it was not all software. I also studied networking, the layers of the OSI model, computer architecture, hardware and other concepts that helped me better understand what happens beyond the code.',
				'I think this was the stage where my technical knowledge grew the most. I stopped seeing programming as an isolated piece and started to understand much better the whole ecosystem that makes a computer and its systems work.',
			].join('\n\n'),
			es: [
				'Cuando llegó el momento de elegir la profesión a la que dedicaría los próximos años de mi vida, la verdad es que no fue una decisión demasiado difícil.',
				'Mi curiosidad por la informática se había seguido alimentando durante los últimos años y, para entonces, ya tenía bastante claro que quería construir mi perfil profesional alrededor de ella.',
				'En la carrera pude entrar mucho más a fondo en temas de programación: algoritmos, estructuras de datos, control de calidad, bases de datos y las diferentes capas que componen un sistema de software. También conocí distintas ramas del desarrollo, como web, móvil e inteligencia artificial.',
				'Pero no todo fue software. También estudié redes, las diferentes capas del modelo OSI, arquitectura de computadoras, hardware y otros conceptos que me ayudaron a entender mejor qué ocurre más allá del código.',
				'Creo que esta fue la etapa en la que mi conocimiento técnico creció más. Dejé de ver la programación como una pieza aislada y empecé a entender mucho mejor todo el ecosistema que hace posible que una computadora y sus sistemas funcionen.',
			].join('\n\n'),
		},
		tags: ['Software', 'Algorithms', 'Databases', 'Web', 'Mobile', 'AI', 'Networking', 'Hardware'],
	},
	{
		hash: '4a0d9e1',
		lane: 0,
		kind: 'learning',
		period: { en: '2013 — 2016', es: '2013 — 2016' },
		title: { en: 'High school, programming track', es: 'Preparatoria, especialidad en programación' },
		body: {
			en: [
				'In high school we had to choose a technical specialty to study for the next three years, something like a workshop. I was already curious about programming, so the decision was not a hard one.',
				'This is where I started building my technical foundations in a more formal way. I learned the fundamentals of programming logic, how an algorithm works, databases, object-oriented programming and other concepts I had only explored on my own until then.',
				'This stage mattered because it turned that early curiosity into more structured knowledge and gave me the foundations I would keep building on.',
			].join('\n\n'),
			es: [
				'En la preparatoria teníamos que elegir una especialidad técnica para estudiar durante los siguientes tres años, algo parecido a un taller. Yo ya traía curiosidad por la programación, así que la decisión no fue muy difícil.',
				'Fue aquí donde empecé a construir mis bases técnicas de una forma más formal. Aprendí los fundamentos de la lógica de programación, cómo funciona un algoritmo, bases de datos, programación orientada a objetos y otros conceptos que hasta entonces solo había explorado por mi cuenta.',
				'Esta etapa fue importante porque convirtió esa curiosidad inicial en conocimiento más estructurado y me dio las bases sobre las que después seguiría construyendo.',
			].join('\n\n'),
		},
		tags: ['OOP', 'Logic', 'Databases'],
	},
	{
		hash: '0c7f2b8',
		lane: 0,
		kind: 'learning',
		period: { en: '≈ 2010 — 2012', es: '≈ 2010 — 2012' },
		title: { en: 'init: my big brother’s projects', es: 'init: los proyectos de mi hermano' },
		body: {
			en: [
				'My first approach to software development came through my older brother. He is also a computer systems engineer and, since I always loved video games, it especially caught my attention that he had chosen to specialize in making them.',
				'Every time he came home to visit, he would take the chance to show me a bit of the projects he was working on and explain how the technology behind what was then my favorite hobby worked.',
				'I found it fascinating to discover that behind every game there were systems, logic and code making everything work. I think that is where my curiosity for software development truly began.',
				'Then came the YouTube searches. I started watching videos on how to program simple games, like Snake, and trying to replicate them on my own.',
				'Without knowing it yet, those small experiments ended up being my first development projects.',
			].join('\n\n'),
			es: [
				'Mi primer acercamiento al desarrollo de software fue gracias a mi hermano mayor. Él también es ingeniero en sistemas computacionales y, como a mí siempre me gustaron mucho los videojuegos, me llamaba especialmente la atención que hubiera elegido especializarse en su desarrollo.',
				'Cada vez que venía de visita a casa, aprovechaba para enseñarme un poco de los proyectos en los que estaba trabajando y explicarme cómo funcionaba la tecnología detrás de lo que en ese momento era mi hobby favorito.',
				'Me parecía fascinante descubrir que detrás de cada juego había sistemas, lógica y código haciendo que todo funcionara. Creo que fue ahí donde empezó realmente mi curiosidad por el desarrollo de software.',
				'Después vinieron las búsquedas en YouTube. Empecé viendo videos sobre cómo programar juegos sencillos, como Snake, e intentando replicarlos por mi cuenta.',
				'Sin saberlo todavía, esos pequeños experimentos terminaron siendo mis primeros proyectos de desarrollo.',
			].join('\n\n'),
		},
		tags: ['Curiosity', 'YouTube'],
	},
];
