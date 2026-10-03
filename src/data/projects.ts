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
	/** Home page card art: wordmark lines, tag line, and the colour theme class from global.css. */
	cardArt: { label: [string, string]; tag: Record<ProjectLanguage, string>; theme: string };
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
		cardArt: { label: ['deba', 'tra'], tag: { en: 'STRUCTURED DEBATE', es: 'DEBATE ESTRUCTURADO' }, theme: 'art-atlas' },
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
	{
		slug: 'paytrack',
		number: '02',
		repositoryUrl: 'https://github.com/JavierCaz/PayTrack',
		name: { en: 'PAYTRACK', es: 'PAYTRACK' },
		type: { en: 'PRODUCT / MOBILE APP', es: 'PRODUCTO / APLICACIÓN MÓVIL' },
		stack: ['EXPO SDK 57', 'REACT NATIVE', 'TYPESCRIPT', 'ZUSTAND', 'SQLITE'],
		cardImage: '/images/projects/paytrack/card.webp',
		cardArt: { label: ['pay', 'track'], tag: { en: 'LOCAL-FIRST LEDGER', es: 'REGISTRO LOCAL' }, theme: 'art-ledger' },
		cardDescription: {
			en: 'A local-first mobile app for tracking clients, installment plans, and payments, with no account and no server.',
			es: 'Una aplicación móvil local-first para llevar clientes, planes de pago y cobros, sin cuentas ni servidores.',
		},
		article: {
			title: {
				en: 'Building PayTrack: a local-first app for managing collections and payments',
				es: 'PayTrack: una aplicación local-first para gestionar cobros y pagos',
			},
			dek: {
				en: 'A tool I built for my own small business: no subscription, no ads, and no server between me and my records.',
				es: 'Una herramienta que construí para mi propio negocio: sin suscripción, sin anuncios y sin un servidor entre mis registros y yo.',
			},
			intro: {
				en: [
					'I run a small personal business, and for years I managed it with an app from the Play Store. I paid a monthly subscription for the premium version, but when ads started appearing even for paying users, I decided to stop relying on it and build my own tool. That is how PayTrack was born.',
					'Much of the software we use today starts from the same premise: our data lives on a server, and our apps are an interface for reaching it. For many products that makes complete sense. But for one person keeping track of who owes what, that architecture adds accounts, connectivity, and recurring costs that the problem never needed. PayTrack takes the opposite approach: everything lives on the device.',
				],
				es: [
					'Tengo un pequeño negocio personal que durante años administré con una aplicación de la Play Store. Pagaba una suscripción mensual por la versión premium, pero cuando empezaron a aparecer anuncios incluso para quienes pagábamos, decidí dejar de depender de ella y construir mi propia herramienta. Así nació PayTrack.',
					'Buena parte del software que usamos hoy parte de una misma premisa: nuestros datos viven en un servidor y las aplicaciones son una interfaz para acceder a ellos. Para muchos productos eso tiene todo el sentido. Pero para una persona que lleva el control de quién le debe qué, esa arquitectura añade cuentas, conexión y costos recurrentes que el problema nunca necesitó. PayTrack toma el camino contrario: todo vive en el dispositivo.',
				],
			},
			introImage: {
				src: '/images/projects/paytrack/intro.webp',
				alt: {
					en: 'PayTrack promotional image: the dashboard on a tablet and a phone, next to a feature list ending in “100% Local — your data stays on your device”.',
					es: 'Imagen promocional de PayTrack: el panel en una tableta y un teléfono, junto a una lista de funciones que termina con “100% Local — your data stays on your device”.',
				},
				caption: {
					en: 'PayTrack: clients, payments, receipts, and a financial overview, all stored locally.',
					es: 'PayTrack: clientes, cobros, recibos y un resumen financiero, todo guardado localmente.',
				},
			},
			sections: {
				en: [
					{
						heading: 'Your data stays on your device',
						blocks: [
							{ type: 'paragraph', text: 'PayTrack has no backend, no sign-up, and no environment variables. Every client, collection, and payment is stored in a SQLite database on the phone, so the app works the same with or without an internet connection.' },
							{ type: 'paragraph', text: 'Local-first does not have to mean fragile. All data can be exported as a JSON backup and restored on another device. The importer also understands the backup format of the app I used before, so years of existing records came along when I switched.' },
							{ type: 'image', src: '/images/projects/paytrack/local-first.webp', alt: { en: 'Diagram: PayTrack on one phone keeps a SQLite database with clients, collections, payments, and app settings, with no link to a crossed-out cloud server. An export arrow leads to a JSON backup, which restores every client on a second phone; a backup from the old app also feeds the importer.', es: 'Diagrama: PayTrack en un teléfono guarda una base de datos SQLite con clientes, cobros, pagos y configuración, sin conexión a un servidor en la nube tachado. Una flecha de exportación lleva a un respaldo JSON que restaura todos los clientes en un segundo teléfono; un respaldo de la aplicación anterior también entra por el importador.' }, caption: { en: 'Everything lives in SQLite on the phone; a JSON backup is the only thing that ever leaves it.', es: 'Todo vive en SQLite dentro del teléfono; un respaldo JSON es lo único que sale de él.' } },
						],
					},
					{
						heading: 'Clients, collections, and installments',
						blocks: [
							{ type: 'paragraph', text: 'The model mirrors how the business actually works. A client can have several collections; each collection is a product or service sold on credit, with a total price and a number of installments. Each installment is recorded as paid, partial, or pending, and collections that fall behind are flagged as overdue automatically.' },
							{ type: 'paragraph', text: 'The client list can be searched and filtered by active, pending, and settled status. Clients who should not receive new credit can be moved to a blacklist with a note explaining why.' },
							{ type: 'image', src: '/images/projects/paytrack/clients.webp', alt: { en: 'Three PayTrack screens: the filtered client list, Ana Martínez’s profile with paid and remaining totals, and a laptop collection showing 7 of 10 payments made.', es: 'Tres pantallas de PayTrack: la lista de clientes filtrada, el perfil de Ana Martínez con totales pagados y pendientes, y un cobro de una laptop con 7 de 10 pagos realizados.' }, caption: { en: 'From client list to client profile to a single collection and its installment history.', es: 'De la lista de clientes al perfil de un cliente y a un cobro con su historial de pagos.' } },
						],
					},
					{
						heading: 'Schedules that match real life',
						blocks: [
							{ type: 'paragraph', text: 'Not everyone pays on the same rhythm. Each collection has a recurrence rule: specific days of the month (for example, the 1st and the 15th), specific days of the week, or a weekday within the month, such as the first Monday. Each rule is its own strategy in code, which keeps the date logic contained and easy to extend.' },
							{ type: 'paragraph', text: 'A collection can also carry its own interest rate and exchange rate. That lets the app compute the actual earnings from each payment, even when an item was priced in another currency.' },
							{ type: 'image', src: '/images/projects/paytrack/recurrence.webp', alt: { en: 'Diagram: the RecurrenceStrategy interface with three implementations, each shown on a July 2026 calendar: MonthlyStrategy due on the 1st and 15th, WeeklyStrategy due every Monday, and MonthlyWeekdayStrategy due on the first Monday. Below, a collection’s interest rate and conversion rate feed the real earnings per payment.', es: 'Diagrama: la interfaz RecurrenceStrategy con tres implementaciones, cada una sobre un calendario de julio de 2026: MonthlyStrategy vence el 1 y el 15, WeeklyStrategy cada lunes y MonthlyWeekdayStrategy el primer lunes. Abajo, la tasa de interés y el tipo de cambio de un cobro alimentan la ganancia real de cada pago.' }, caption: { en: 'One strategy per recurrence rule, plus the per-collection rates behind the earnings figures.', es: 'Una estrategia por cada regla de recurrencia, más las tasas de cada cobro detrás de las ganancias.' } },
						],
					},
					{
						heading: 'Receipts and reminders',
						blocks: [
							{ type: 'paragraph', text: 'Every payment can produce a visual receipt showing the client, the collection, the installment number, and the balance left after paying. The receipt is rendered as an image so it can be shared in any messaging app or saved to the gallery.' },
							{ type: 'paragraph', text: 'For clients with pending payments, a message button opens the share sheet with a customizable reminder. The template uses a {name} placeholder that is replaced with the client’s first name.' },
							{ type: 'image', src: '/images/projects/paytrack/schedule.webp', alt: { en: 'The New Collection form with monthly, weekly, and monthly-weekday recurrence options, next to a payment receipt with Share and Save to Gallery buttons.', es: 'El formulario de nuevo cobro con opciones de recurrencia mensual, semanal y por día de la semana, junto a un recibo de pago con los botones Share y Save to Gallery.' }, caption: { en: 'Setting up a collection’s schedule, and the receipt generated for one of its payments.', es: 'La configuración del calendario de un cobro y el recibo generado para uno de sus pagos.' } },
						],
					},
					{
						heading: 'The whole business at a glance',
						blocks: [
							{ type: 'paragraph', text: 'The dashboard summarizes totals for clients, collections, and payments, along with what has been paid, what remains, the gross amount, the investment, and the earnings. The income view switches between day, week, month, and year, with a chart of paid amounts and earnings across the year.' },
							{ type: 'paragraph', text: 'A privacy toggle masks every amount on screen, which is handy when the phone is open in front of other people.' },
							{ type: 'image', src: '/images/projects/paytrack/dashboard.webp', alt: { en: 'The PayTrack dashboard: totals and financial cards, and the monthly income view with a yearly chart of paid out and earnings.', es: 'El panel de PayTrack: tarjetas de totales y finanzas, y la vista de ingresos mensuales con una gráfica anual de lo cobrado y las ganancias.' }, caption: { en: 'Totals, financials, and income over time, all computed on the device.', es: 'Totales, finanzas e ingresos a lo largo del tiempo, todo calculado en el dispositivo.' } },
						],
					},
					{
						heading: 'Under the hood',
						blocks: [
							{ type: 'paragraph', text: 'PayTrack is built with Expo SDK 57, React Native, React 19 with the React Compiler, and strict TypeScript. Expo Router provides file-based navigation for clients, collections, payments, receipts, and settings.' },
							{ type: 'paragraph', text: 'Screens talk to Zustand stores, the stores call services, and the services run plain SQL through expo-sqlite. There is no ORM. The schema is created and migrated at startup with idempotent statements, so existing installs upgrade safely when a new column is added.' },
							{ type: 'paragraph', text: 'Running SQLite on Android brought its own lessons. The database runs in WAL mode, opening the connection is serialized, failed queries reopen the connection and retry, and a lightweight keep-alive ping stops Android from dropping an idle connection.' },
							{ type: 'paragraph', text: 'Builds go through EAS. Every push to main triggers a GitHub Actions workflow that builds an installable preview APK, so a new version can be tested on a real phone without going through the Play Store.' },
							{ type: 'image', src: '/images/projects/paytrack/architecture.webp', alt: { en: 'Diagram: screens built with Expo Router call Zustand stores, which call services running plain SQL through expo-sqlite. A side panel lists the Android SQLite safeguards: WAL mode, serialized open, reopen and retry, and a keep-alive ping. Below, every push to main runs GitHub Actions and an EAS preview build that produces an APK for a real phone.', es: 'Diagrama: las pantallas hechas con Expo Router llaman a stores de Zustand, que llaman a servicios con SQL directo mediante expo-sqlite. Un panel lateral enumera las protecciones de SQLite en Android: modo WAL, apertura serializada, reapertura y reintento, y un ping para mantener viva la conexión. Abajo, cada push a main ejecuta GitHub Actions y una compilación de prueba en EAS que genera un APK para un teléfono real.' }, caption: { en: 'From screen to SQLite in four layers, and from a push to main to an installable APK.', es: 'De la pantalla a SQLite en cuatro capas, y de un push a main a un APK instalable.' } },
						],
					},
					{
						heading: 'Two languages, two themes',
						blocks: [
							{ type: 'paragraph', text: 'The interface is available in English and Spanish. It detects the device language and can also be changed manually in Settings. Light and dark themes follow the system by default or can be chosen explicitly.' },
							{ type: 'image', src: '/images/projects/paytrack/languages.webp', alt: { en: 'The Settings screen in Spanish with the dark theme, next to the dashboard in English with the light theme.', es: 'La pantalla de configuración en español con el tema oscuro, junto al panel en inglés con el tema claro.' }, caption: { en: 'Settings in Spanish with the dark theme, and the dashboard in English with the light theme.', es: 'La configuración en español con el tema oscuro y el panel en inglés con el tema claro.' } },
						],
					},
				],
				es: [
					{
						heading: 'Tus datos se quedan en tu dispositivo',
						blocks: [
							{ type: 'paragraph', text: 'PayTrack no tiene backend, registro ni variables de entorno. Cada cliente, cobro y pago se guarda en una base de datos SQLite dentro del teléfono, así que la aplicación funciona igual con o sin conexión a internet.' },
							{ type: 'paragraph', text: 'Local-first no tiene por qué significar frágil. Todos los datos se pueden exportar como un respaldo JSON y restaurarse en otro dispositivo. El importador también entiende el formato de respaldo de la aplicación que usaba antes, así que años de registros vinieron conmigo cuando hice el cambio.' },
							{ type: 'image', src: '/images/projects/paytrack/local-first.webp', alt: { en: 'Diagram: PayTrack on one phone keeps a SQLite database with clients, collections, payments, and app settings, with no link to a crossed-out cloud server. An export arrow leads to a JSON backup, which restores every client on a second phone; a backup from the old app also feeds the importer.', es: 'Diagrama: PayTrack en un teléfono guarda una base de datos SQLite con clientes, cobros, pagos y configuración, sin conexión a un servidor en la nube tachado. Una flecha de exportación lleva a un respaldo JSON que restaura todos los clientes en un segundo teléfono; un respaldo de la aplicación anterior también entra por el importador.' }, caption: { en: 'Everything lives in SQLite on the phone; a JSON backup is the only thing that ever leaves it.', es: 'Todo vive en SQLite dentro del teléfono; un respaldo JSON es lo único que sale de él.' } },
						],
					},
					{
						heading: 'Clientes, cobros y pagos',
						blocks: [
							{ type: 'paragraph', text: 'El modelo refleja cómo funciona realmente el negocio. Un cliente puede tener varios cobros; cada cobro es un producto o servicio vendido a crédito, con un precio total y un número de pagos. Cada pago se registra como pagado, parcial o pendiente, y los cobros atrasados se marcan como vencidos automáticamente.' },
							{ type: 'paragraph', text: 'La lista de clientes permite buscar y filtrar por estado: activos, pendientes y liquidados. A los clientes que no deberían recibir nuevos créditos se les puede pasar a una lista negra con una nota que explique el motivo.' },
							{ type: 'image', src: '/images/projects/paytrack/clients.webp', alt: { en: 'Three PayTrack screens: the filtered client list, Ana Martínez’s profile with paid and remaining totals, and a laptop collection showing 7 of 10 payments made.', es: 'Tres pantallas de PayTrack: la lista de clientes filtrada, el perfil de Ana Martínez con totales pagados y pendientes, y un cobro de una laptop con 7 de 10 pagos realizados.' }, caption: { en: 'From client list to client profile to a single collection and its installment history.', es: 'De la lista de clientes al perfil de un cliente y a un cobro con su historial de pagos.' } },
						],
					},
					{
						heading: 'Calendarios que se ajustan a la realidad',
						blocks: [
							{ type: 'paragraph', text: 'No todas las personas pagan con el mismo ritmo. Cada cobro tiene una regla de recurrencia: días específicos del mes (por ejemplo, el 1 y el 15), días de la semana o un día de la semana dentro del mes, como el primer lunes. Cada regla es una estrategia independiente en el código, lo que mantiene acotada la lógica de fechas y facilita ampliarla.' },
							{ type: 'paragraph', text: 'Un cobro también puede tener su propia tasa de interés y tipo de cambio. Así la aplicación calcula la ganancia real de cada pago, incluso cuando el artículo tenía un precio en otra moneda.' },
							{ type: 'image', src: '/images/projects/paytrack/recurrence.webp', alt: { en: 'Diagram: the RecurrenceStrategy interface with three implementations, each shown on a July 2026 calendar: MonthlyStrategy due on the 1st and 15th, WeeklyStrategy due every Monday, and MonthlyWeekdayStrategy due on the first Monday. Below, a collection’s interest rate and conversion rate feed the real earnings per payment.', es: 'Diagrama: la interfaz RecurrenceStrategy con tres implementaciones, cada una sobre un calendario de julio de 2026: MonthlyStrategy vence el 1 y el 15, WeeklyStrategy cada lunes y MonthlyWeekdayStrategy el primer lunes. Abajo, la tasa de interés y el tipo de cambio de un cobro alimentan la ganancia real de cada pago.' }, caption: { en: 'One strategy per recurrence rule, plus the per-collection rates behind the earnings figures.', es: 'Una estrategia por cada regla de recurrencia, más las tasas de cada cobro detrás de las ganancias.' } },
						],
					},
					{
						heading: 'Recibos y recordatorios',
						blocks: [
							{ type: 'paragraph', text: 'Cada pago puede generar un recibo visual con el cliente, el cobro, el número de pago y el saldo pendiente después de pagar. El recibo se genera como imagen para compartirlo en cualquier aplicación de mensajería o guardarlo en la galería.' },
							{ type: 'paragraph', text: 'Para los clientes con pagos pendientes, un botón de mensaje abre el menú para compartir con un recordatorio personalizable. La plantilla usa el marcador {name}, que se reemplaza por el nombre del cliente.' },
							{ type: 'image', src: '/images/projects/paytrack/schedule.webp', alt: { en: 'The New Collection form with monthly, weekly, and monthly-weekday recurrence options, next to a payment receipt with Share and Save to Gallery buttons.', es: 'El formulario de nuevo cobro con opciones de recurrencia mensual, semanal y por día de la semana, junto a un recibo de pago con los botones Share y Save to Gallery.' }, caption: { en: 'Setting up a collection’s schedule, and the receipt generated for one of its payments.', es: 'La configuración del calendario de un cobro y el recibo generado para uno de sus pagos.' } },
						],
					},
					{
						heading: 'Todo el negocio de un vistazo',
						blocks: [
							{ type: 'paragraph', text: 'El panel resume los totales de clientes, cobros y pagos, junto con lo cobrado, lo pendiente, el monto bruto, la inversión y las ganancias. La vista de ingresos cambia entre día, semana, mes y año, con una gráfica de lo cobrado y las ganancias a lo largo del año.' },
							{ type: 'paragraph', text: 'Un interruptor de privacidad oculta todas las cantidades en pantalla, algo útil cuando el teléfono está abierto frente a otras personas.' },
							{ type: 'image', src: '/images/projects/paytrack/dashboard.webp', alt: { en: 'The PayTrack dashboard: totals and financial cards, and the monthly income view with a yearly chart of paid out and earnings.', es: 'El panel de PayTrack: tarjetas de totales y finanzas, y la vista de ingresos mensuales con una gráfica anual de lo cobrado y las ganancias.' }, caption: { en: 'Totals, financials, and income over time, all computed on the device.', es: 'Totales, finanzas e ingresos a lo largo del tiempo, todo calculado en el dispositivo.' } },
						],
					},
					{
						heading: 'Bajo el capó',
						blocks: [
							{ type: 'paragraph', text: 'PayTrack está construida con Expo SDK 57, React Native, React 19 con React Compiler y TypeScript estricto. Expo Router ofrece navegación basada en archivos para clientes, cobros, pagos, recibos y configuración.' },
							{ type: 'paragraph', text: 'Las pantallas se comunican con stores de Zustand, los stores llaman a servicios y los servicios ejecutan SQL directo mediante expo-sqlite. No hay ORM. El esquema se crea y migra al iniciar con sentencias idempotentes, así que las instalaciones existentes se actualizan sin problema cuando se agrega una columna nueva.' },
							{ type: 'paragraph', text: 'Usar SQLite en Android dejó sus propias lecciones. La base de datos funciona en modo WAL, la apertura de la conexión está serializada, las consultas fallidas reabren la conexión y lo vuelven a intentar, y un ping ligero evita que Android cierre una conexión inactiva.' },
							{ type: 'paragraph', text: 'Las compilaciones pasan por EAS. Cada push a main dispara un flujo de GitHub Actions que genera un APK de prueba instalable, así una nueva versión se puede probar en un teléfono real sin pasar por la Play Store.' },
							{ type: 'image', src: '/images/projects/paytrack/architecture.webp', alt: { en: 'Diagram: screens built with Expo Router call Zustand stores, which call services running plain SQL through expo-sqlite. A side panel lists the Android SQLite safeguards: WAL mode, serialized open, reopen and retry, and a keep-alive ping. Below, every push to main runs GitHub Actions and an EAS preview build that produces an APK for a real phone.', es: 'Diagrama: las pantallas hechas con Expo Router llaman a stores de Zustand, que llaman a servicios con SQL directo mediante expo-sqlite. Un panel lateral enumera las protecciones de SQLite en Android: modo WAL, apertura serializada, reapertura y reintento, y un ping para mantener viva la conexión. Abajo, cada push a main ejecuta GitHub Actions y una compilación de prueba en EAS que genera un APK para un teléfono real.' }, caption: { en: 'From screen to SQLite in four layers, and from a push to main to an installable APK.', es: 'De la pantalla a SQLite en cuatro capas, y de un push a main a un APK instalable.' } },
						],
					},
					{
						heading: 'Dos idiomas, dos temas',
						blocks: [
							{ type: 'paragraph', text: 'La interfaz está disponible en inglés y español. Detecta el idioma del dispositivo y también se puede cambiar manualmente en la configuración. Los temas claro y oscuro siguen al sistema por defecto o se pueden elegir de forma explícita.' },
							{ type: 'image', src: '/images/projects/paytrack/languages.webp', alt: { en: 'The Settings screen in Spanish with the dark theme, next to the dashboard in English with the light theme.', es: 'La pantalla de configuración en español con el tema oscuro, junto al panel en inglés con el tema claro.' }, caption: { en: 'Settings in Spanish with the dark theme, and the dashboard in English with the light theme.', es: 'La configuración en español con el tema oscuro y el panel en inglés con el tema claro.' } },
						],
					},
				],
			},
		},
	},
];
