export type ProjectLanguage = 'en' | 'es';

export type ProjectBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'image'; src: string; alt: Record<ProjectLanguage, string>; caption: Record<ProjectLanguage, string> };

export type ProjectImage = {
	src: string;
	alt: Record<ProjectLanguage, string>;
	caption: Record<ProjectLanguage, string>;
};

export type ProjectSection = {
	heading: string;
	blocks: ProjectBlock[];
};

export type Project = {
	slug: string;
	number: string;
	demoUrl?: string;
	repositoryUrl?: string;
	name: Record<ProjectLanguage, string>;
	type: Record<ProjectLanguage, string>;
	stack: string[];
	/** Screenshot mounted on the home page project card. */
	cardImage?: string;
	cardDescription: Record<ProjectLanguage, string>;
	article: {
		title: Record<ProjectLanguage, string>;
		dek: Record<ProjectLanguage, string>;
		intro: Record<ProjectLanguage, string[]>;
		introImage: ProjectImage;
		sections: Record<ProjectLanguage, ProjectSection[]>;
	};
};

export const projects: Project[] = [
	{
		slug: 'debatra',
		number: '01',
		demoUrl: 'https://debatra.vercel.app/',
		repositoryUrl: 'https://github.com/JavierCaz/Debatra',
		name: { en: 'DEBATRA', es: 'DEBATRA' },
		type: { en: 'PRODUCT / FULL-STACK APP', es: 'PRODUCTO / APLICACIÓN FULL-STACK' },
		stack: ['NEXT.JS 15', 'REACT 19', 'TYPESCRIPT', 'PRISMA', 'POSTGRESQL'],
		cardImage: '/images/projects/debatra/card.webp',
		cardDescription: {
			en: 'An asynchronous debate platform designed to make room for slower, more constructive conversations.',
			es: 'Una plataforma de debate asincrónico pensada para dar espacio a conversaciones más pausadas y constructivas.',
		},
		article: {
			title: {
				en: 'Building Debatra: architecture and vision for an asynchronous debate platform',
				es: 'Construyendo Debatra: arquitectura y visión de una plataforma de debate asincrónico',
			},
			dek: {
				en: 'A different kind of digital space: one where people can develop ideas through structured, evidence-based debate.',
				es: 'Un espacio digital diferente, donde las personas puedan desarrollar ideas mediante debates estructurados y basados en evidencia.',
			},
			intro: {
				en: [
					"The online world increasingly feels dominated by social networks built around fast, stimulating content and emotional impact. Digital spaces shape how people behave, and it is no coincidence that constructive interaction can be difficult to find in these environments. I believe we need new kinds of online spaces that encourage reflection over reaction.",
					"That is the idea behind Debatra: an alternative digital space for debate. It is not meant to replace conventional social networks, but to make room for a different kind of interaction—one where people can develop ideas through a more thoughtful and constructive exchange.",
				],
				es: [
					"La experiencia del mundo virtual se siente cada vez más dominada por redes sociales cuya naturaleza favorece el contenido rápido y estimulante, capaz de provocar un gran impacto emocional. El entorno digital también delimita y condiciona el comportamiento de quienes lo habitan. No es casualidad que en estas redes sea tan difícil encontrar interacciones constructivas. Por eso creo que hacen falta nuevos espacios digitales que promuevan una interacción más reflexiva y menos reactiva.",
					"Esa es la idea detrás de Debatra: un espacio digital alternativo para debatir. No busca sustituir a las redes sociales convencionales, sino abrir un lugar distinto donde puedan surgir otras formas de interacción y las ideas puedan desarrollarse de manera más reflexiva y constructiva.",
				],
			},
			introImage: {
				src: '/images/projects/debatra/intro.webp',
				alt: {
					en: 'Debatra’s landing page with the headline “Evidence-Based Debates” and a four-step explanation of how debates work.',
					es: 'La página principal de Debatra con el titular “Evidence-Based Debates” y una explicación en cuatro pasos de cómo funcionan los debates.',
				},
				caption: {
					en: 'Debatra’s landing page: structured, asynchronous debates built on evidence.',
					es: 'La página principal de Debatra: debates estructurados y asincrónicos basados en evidencia.',
				},
			},
			sections: {
				en: [
					{
						heading: 'A debate needs a shape',
						blocks: [
							{ type: 'paragraph', text: 'Debatra is built around the idea that a useful debate needs more than an open comment box. The product gives each discussion a clear structure so participants can follow what has been said, respond with intention, and build on earlier arguments.' },
							{ type: 'paragraph', text: 'The turn system alternates between proponents and opponents. A debate moves from one side’s arguments to the other side’s responses, repeating for the number of turns configured by its creator. This shared rhythm makes the exchange easier to follow and gives each side room to respond.' },
							{ type: 'image', src: '/images/projects/debatra/turns.webp', alt: { en: 'A completed Debatra debate: turn 1 shows the proposers’ argument above the opposers’ response.', es: 'Un debate completado en Debatra: el turno 1 muestra el argumento de los defensores sobre la respuesta de los opositores.' }, caption: { en: 'Turns alternate between sides, so every argument sits next to the response it received.', es: 'Los turnos se alternan entre ambos lados, así que cada argumento aparece junto a la respuesta que recibió.' } },
						],
					},
					{
						heading: 'Conversations with a thread',
						blocks: [
							{ type: 'paragraph', text: 'Arguments can respond to earlier arguments, creating visible chains of discussion instead of a flat stream. From an argument, a reader can move back through its ancestors or see its direct replies. This makes it easier to understand how an idea developed and where a response fits.' },
							{ type: 'image', src: '/images/projects/debatra/thread.webp', alt: { en: 'The Argument Responses dialog showing an opposer’s argument and the proposer’s reply from turn 2.', es: 'El diálogo de respuestas mostrando el argumento de un opositor y la réplica del defensor en el turno 2.' }, caption: { en: 'Following a thread: an argument from turn 1 and the reply it received in turn 2.', es: 'Siguiendo un hilo: un argumento del turno 1 y la respuesta que recibió en el turno 2.' } },
						],
					},
					{
						heading: 'Evidence and shared definitions',
						blocks: [
							{ type: 'paragraph', text: 'Debate creators can set a minimum number of references required for each argument. Sources may include academic papers, news articles, books, government documents, statistics, videos, or websites. The goal is to help participants support their claims with evidence.' },
							{ type: 'image', src: '/images/projects/debatra/references.webp', alt: { en: 'An argument with its references expanded, showing an academic paper with author, journal, and source link.', es: 'Un argumento con sus referencias desplegadas, mostrando un artículo académico con autor, revista y enlace a la fuente.' }, caption: { en: 'Each argument carries its sources, typed and linked so readers can check them.', es: 'Cada argumento lleva sus fuentes, clasificadas y enlazadas para que cualquiera pueda revisarlas.' } },
							{ type: 'paragraph', text: 'Participants can also propose definitions for ambiguous terms during a turn. A definition moves through proposed, accepted, and contested states. Accepted definitions become shared language for the debate and help reduce arguments that stem from different meanings of the same word.' },
							{ type: 'image', src: '/images/projects/debatra/definitions.webp', alt: { en: 'The Definitions tab listing three terms with proposed, accepted, and contested states.', es: 'La pestaña de definiciones con tres términos en estado propuesto, aceptado y disputado.' }, caption: { en: 'Shared definitions move through proposed, accepted, and contested states, with version history.', es: 'Las definiciones compartidas pasan por los estados propuesta, aceptada y disputada, con historial de versiones.' } },
						],
					},
					{
						heading: 'A focused way for the community to take part',
						blocks: [
							{ type: 'paragraph', text: 'People can follow a debate without joining as an active participant. They can support or oppose arguments and definitions through votes. This gives the wider community a meaningful, bounded way to contribute while avoiding the noise of unrestricted comment threads.' },
							{ type: 'paragraph', text: 'In-app and email notifications keep participants up to date on new arguments, votes, concessions, proposed definitions, and other debate activity. Users can sign in with Google, GitHub, or an email and password, including password reset.' },
							{ type: 'image', src: '/images/projects/debatra/notifications.webp', alt: { en: 'The notifications menu open over a debate, listing a turn reminder, a new definition, and a supported argument.', es: 'El menú de notificaciones abierto sobre un debate, con un aviso de turno, una nueva definición y un argumento apoyado.' }, caption: { en: 'Notifications keep participants on track: whose turn it is, new definitions, and votes on their arguments.', es: 'Las notificaciones mantienen a los participantes al tanto: de quién es el turno, nuevas definiciones y votos a sus argumentos.' } },
						],
					},
					{
						heading: 'A modern full-stack foundation',
						blocks: [
							{ type: 'paragraph', text: 'Debatra uses Next.js 15 with the App Router. Server Actions handle mutations, while API Routes connect external services such as webhooks. The interface is built with React 19 and strict TypeScript; Tailwind CSS 4 and shadcn/ui provide the styling system and accessible UI components. Tiptap powers the rich text editor for writing arguments.' },
							{ type: 'paragraph', text: 'The relational model uses Prisma 6 and PostgreSQL. It covers debates and their lifecycle, sourced references attached to arguments, definitions with version history and endorsements, and flexible notification preferences for in-app and email delivery.' },
							{ type: 'paragraph', text: 'TypeScript strict mode helps catch errors early, and Biome keeps linting and formatting consistent. The app is deployed on Vercel, with Supabase providing managed PostgreSQL and GitHub Actions automating CI/CD.' },
							{ type: 'image', src: '/images/projects/debatra/editor.webp', alt: { en: 'The create-debate form with the Tiptap rich text editor, showing bold text and a list, and the references section below.', es: 'El formulario para crear un debate con el editor de texto enriquecido Tiptap, mostrando negritas y una lista, y la sección de referencias debajo.' }, caption: { en: 'Arguments are written in a Tiptap rich text editor, with references attached right below.', es: 'Los argumentos se escriben en un editor de texto enriquecido con Tiptap, con las referencias justo debajo.' } },
						],
					},
					{
						heading: 'Designed for two languages',
						blocks: [
							{ type: 'paragraph', text: 'The interface uses i18next to support Spanish and English. It detects the browser language and also lets people change languages manually. The selected language carries through the interface, email notifications, and system messages.' },
							{ type: 'image', src: '/images/projects/debatra/spanish.webp', alt: { en: 'Debatra’s interface in Spanish, showing a Spanish-language debate about bullfighting.', es: 'La interfaz de Debatra en español, mostrando un debate en español sobre las corridas de toros.' }, caption: { en: 'The full interface in Spanish: navigation, roles, turns, and debate status all follow the selected language.', es: 'Toda la interfaz en español: navegación, roles, turnos y estado del debate siguen el idioma elegido.' } },
						],
					},
					{
						heading: 'What I want to explore next',
						blocks: [
							{ type: 'paragraph', text: 'These ideas are on the roadmap and are not implemented yet:' },
							{ type: 'list', items: [
								'Draft debates, so creators can prepare the title, format, turn count, and reference requirements before publishing.',
								'One-versus-many and many-versus-many formats, expanding beyond the current one-on-one debate structure.',
								'Neutral judges who can evaluate arguments, close a debate, or resolve a tie when participants do not reach consensus.',
								'Concessions that let a participant acknowledge an opponent’s point and change their position without social penalty.',
								'Community reporting for inappropriate behavior, abusive arguments, or rule violations.',
								'Endorsements for proposed definitions, helping the community reach consensus and potentially accept well-supported definitions automatically.',
							] },
						],
					},
				],
				es: [
					{
						heading: 'Un debate necesita estructura',
						blocks: [
							{ type: 'paragraph', text: 'Debatra parte de una idea: un debate útil necesita más que un cuadro de comentarios abierto. La plataforma da una estructura clara a cada conversación para que las personas puedan seguir lo que se ha dicho, responder con intención y construir sobre argumentos anteriores.' },
							{ type: 'paragraph', text: 'El sistema de turnos alterna entre proponentes y oponentes. Primero presenta sus argumentos un lado y después responde el otro; el ciclo se repite según el número de turnos que configure quien crea el debate. Este ritmo compartido facilita seguir la conversación y da espacio a cada postura.' },
							{ type: 'image', src: '/images/projects/debatra/turns.webp', alt: { en: 'A completed Debatra debate: turn 1 shows the proposers’ argument above the opposers’ response.', es: 'Un debate completado en Debatra: el turno 1 muestra el argumento de los defensores sobre la respuesta de los opositores.' }, caption: { en: 'Turns alternate between sides, so every argument sits next to the response it received.', es: 'Los turnos se alternan entre ambos lados, así que cada argumento aparece junto a la respuesta que recibió.' } },
						],
					},
					{
						heading: 'Conversaciones con hilos',
						blocks: [
							{ type: 'paragraph', text: 'Los argumentos pueden responder a otros anteriores y formar cadenas visibles en vez de aparecer en una lista plana. Desde un argumento es posible recorrer sus antecedentes o consultar sus respuestas directas. Así resulta más fácil entender cómo se desarrolló una idea y dónde encaja cada réplica.' },
							{ type: 'image', src: '/images/projects/debatra/thread.webp', alt: { en: 'The Argument Responses dialog showing an opposer’s argument and the proposer’s reply from turn 2.', es: 'El diálogo de respuestas mostrando el argumento de un opositor y la réplica del defensor en el turno 2.' }, caption: { en: 'Following a thread: an argument from turn 1 and the reply it received in turn 2.', es: 'Siguiendo un hilo: un argumento del turno 1 y la respuesta que recibió en el turno 2.' } },
						],
					},
					{
						heading: 'Evidencia y definiciones compartidas',
						blocks: [
							{ type: 'paragraph', text: 'Quien crea un debate puede establecer un mínimo de referencias para cada argumento. Las fuentes pueden ser artículos académicos o periodísticos, libros, documentos gubernamentales, estadísticas, videos o sitios web. La intención es que las afirmaciones puedan apoyarse en evidencia.' },
							{ type: 'image', src: '/images/projects/debatra/references.webp', alt: { en: 'An argument with its references expanded, showing an academic paper with author, journal, and source link.', es: 'Un argumento con sus referencias desplegadas, mostrando un artículo académico con autor, revista y enlace a la fuente.' }, caption: { en: 'Each argument carries its sources, typed and linked so readers can check them.', es: 'Cada argumento lleva sus fuentes, clasificadas y enlazadas para que cualquiera pueda revisarlas.' } },
							{ type: 'paragraph', text: 'Durante un turno también se pueden proponer definiciones para términos ambiguos. Cada definición pasa por los estados propuesta, aceptada y cuestionada. Las definiciones aceptadas se convierten en lenguaje común dentro del debate y ayudan a evitar desacuerdos causados por interpretaciones distintas de una palabra.' },
							{ type: 'image', src: '/images/projects/debatra/definitions.webp', alt: { en: 'The Definitions tab listing three terms with proposed, accepted, and contested states.', es: 'La pestaña de definiciones con tres términos en estado propuesto, aceptado y disputado.' }, caption: { en: 'Shared definitions move through proposed, accepted, and contested states, with version history.', es: 'Las definiciones compartidas pasan por los estados propuesta, aceptada y disputada, con historial de versiones.' } },
						],
					},
					{
						heading: 'Una forma concreta de participar',
						blocks: [
							{ type: 'paragraph', text: 'Cualquier persona puede seguir un debate sin participar activamente. Puede apoyar u oponerse a argumentos y definiciones mediante votos. Así, la comunidad tiene una forma significativa y acotada de contribuir, sin el ruido de los comentarios abiertos.' },
							{ type: 'paragraph', text: 'Las notificaciones dentro de la app y por correo mantienen al tanto a quienes participan sobre nuevos argumentos, votos, concesiones, definiciones propuestas y otros movimientos del debate. Se puede iniciar sesión con Google, GitHub o correo y contraseña, con opción para restablecer la contraseña.' },
							{ type: 'image', src: '/images/projects/debatra/notifications.webp', alt: { en: 'The notifications menu open over a debate, listing a turn reminder, a new definition, and a supported argument.', es: 'El menú de notificaciones abierto sobre un debate, con un aviso de turno, una nueva definición y un argumento apoyado.' }, caption: { en: 'Notifications keep participants on track: whose turn it is, new definitions, and votes on their arguments.', es: 'Las notificaciones mantienen a los participantes al tanto: de quién es el turno, nuevas definiciones y votos a sus argumentos.' } },
						],
					},
					{
						heading: 'Una base full-stack moderna',
						blocks: [
							{ type: 'paragraph', text: 'Debatra usa Next.js 15 con App Router. Las Server Actions gestionan las mutaciones y las API Routes conectan servicios externos, como webhooks. La interfaz está construida con React 19 y TypeScript estricto; Tailwind CSS 4 y shadcn/ui conforman el sistema visual y los componentes accesibles. Tiptap permite redactar argumentos con un editor de texto enriquecido.' },
							{ type: 'paragraph', text: 'El modelo relacional utiliza Prisma 6 y PostgreSQL. Incluye debates y su ciclo de vida, referencias vinculadas a argumentos, definiciones con historial de versiones y respaldos, además de preferencias flexibles para las notificaciones dentro de la app y por correo.' },
							{ type: 'paragraph', text: 'TypeScript en modo estricto ayuda a detectar errores temprano y Biome mantiene consistentes el formato y el análisis del código. La aplicación está desplegada en Vercel, utiliza Supabase para PostgreSQL administrado y GitHub Actions para automatizar CI/CD.' },
							{ type: 'image', src: '/images/projects/debatra/editor.webp', alt: { en: 'The create-debate form with the Tiptap rich text editor, showing bold text and a list, and the references section below.', es: 'El formulario para crear un debate con el editor de texto enriquecido Tiptap, mostrando negritas y una lista, y la sección de referencias debajo.' }, caption: { en: 'Arguments are written in a Tiptap rich text editor, with references attached right below.', es: 'Los argumentos se escriben en un editor de texto enriquecido con Tiptap, con las referencias justo debajo.' } },
						],
					},
					{
						heading: 'Diseñada para dos idiomas',
						blocks: [
							{ type: 'paragraph', text: 'La interfaz utiliza i18next para ofrecer español e inglés. Detecta el idioma del navegador y permite cambiarlo manualmente. El idioma seleccionado se aplica a la interfaz, las notificaciones por correo y los mensajes del sistema.' },
							{ type: 'image', src: '/images/projects/debatra/spanish.webp', alt: { en: 'Debatra’s interface in Spanish, showing a Spanish-language debate about bullfighting.', es: 'La interfaz de Debatra en español, mostrando un debate en español sobre las corridas de toros.' }, caption: { en: 'The full interface in Spanish: navigation, roles, turns, and debate status all follow the selected language.', es: 'Toda la interfaz en español: navegación, roles, turnos y estado del debate siguen el idioma elegido.' } },
						],
					},
					{
						heading: 'Lo que quiero explorar después',
						blocks: [
							{ type: 'paragraph', text: 'Estas ideas están en la hoja de ruta, pero todavía no están implementadas:' },
							{ type: 'list', items: [
								'Borradores de debate para preparar el título, formato, número de turnos y requisitos de referencias antes de publicar.',
								'Modalidades de una persona contra varias y de equipos contra equipos, más allá del formato actual de uno contra uno.',
								'Jueces neutrales que puedan evaluar argumentos, cerrar un debate o resolver empates cuando no haya consenso.',
								'Concesiones para reconocer un argumento de la otra parte y cambiar de postura sin penalización social.',
								'Un sistema comunitario de reportes para señalar comportamientos inapropiados, argumentos abusivos o incumplimientos de las reglas.',
								'Respaldos comunitarios para las definiciones propuestas, con el fin de facilitar el consenso y la aceptación automática de definiciones con apoyo suficiente.',
							] },
						],
					},
				],
			},
		},
	},
];
