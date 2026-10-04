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
	{
		slug: 'anvil',
		number: '03',
		repositoryUrl: 'https://github.com/JavierCaz/anvil',
		name: { en: 'ANVIL', es: 'ANVIL' },
		type: { en: 'PRODUCT / MOBILE APP', es: 'PRODUCTO / APLICACIÓN MÓVIL' },
		stack: ['EXPO SDK 57', 'REACT NATIVE', 'TYPESCRIPT', 'SQLITE', 'VICTORY NATIVE'],
		cardImage: '/images/projects/anvil/card.webp',
		cardArt: { label: ['an', 'vil'], tag: { en: 'PRIVATE GYM LOG', es: 'REGISTRO DE GIMNASIO PRIVADO' }, theme: 'art-forge' },
		cardDescription: {
			en: 'A privacy-first gym tracker that logs every set, detects personal records, and turns lifted weight into milestones, all stored on the phone.',
			es: 'Un registro de gimnasio centrado en la privacidad que anota cada serie, detecta récords personales y convierte el peso levantado en logros, todo guardado en el teléfono.',
		},
		article: {
			title: {
				en: 'Building Anvil: a private, local-first gym tracker that rewards progress',
				es: 'Construyendo Anvil: un registro de gimnasio privado y local-first que premia el progreso',
			},
			dek: {
				en: 'Workout logging, automatic personal records, and a little gamification, with no account, no cloud, and no tracking.',
				es: 'Registro de entrenamientos, récords personales automáticos y un poco de gamificación, sin cuentas, sin nube y sin rastreo.',
			},
			intro: {
				en: [
					'Most workout apps ask for an account before the first set, sync everything to a server, and treat training history as data to be collected. A training log is personal: weights, routines, and the days someone did or did not show up. It does not need to leave the phone to be useful.',
					'Anvil is a gym tracker built on that idea. It logs routines and sets, detects personal records on its own, and adds just enough gamification to make the next session feel worth it, from “you just lifted a panda” to twelve-week consistency streaks. Everything lives in a SQLite database on the device.',
				],
				es: [
					'La mayoría de las aplicaciones de entrenamiento piden una cuenta antes de la primera serie, sincronizan todo con un servidor y tratan el historial como datos para recolectar. Un registro de entrenamiento es algo personal: pesos, rutinas y los días en que alguien fue o no fue al gimnasio. No necesita salir del teléfono para ser útil.',
					'Anvil es un registro de gimnasio construido sobre esa idea. Anota rutinas y series, detecta récords personales por sí solo y añade la gamificación justa para que la siguiente sesión valga la pena, desde “acabas de levantar un panda” hasta rachas de constancia de doce semanas. Todo vive en una base de datos SQLite dentro del dispositivo.',
				],
			},
			introImage: {
				src: '/images/projects/anvil/intro.webp',
				alt: {
					en: 'The Anvil wordmark and tagline “Forge your strength. Track your progress.” next to three screens: the home screen with this week’s workouts, an active Leg Day session, and yearly statistics.',
					es: 'El logotipo de Anvil y el lema “Forge your strength. Track your progress.” junto a tres pantallas: el inicio con los entrenamientos de la semana, una sesión activa de Leg Day y las estadísticas del año.',
				},
				caption: {
					en: 'Anvil: routines, live sessions, records, and statistics, stored entirely on the phone.',
					es: 'Anvil: rutinas, sesiones en vivo, récords y estadísticas, guardados por completo en el teléfono.',
				},
			},
			sections: {
				en: [
					{
						heading: 'Your training history stays on your phone',
						blocks: [
							{ type: 'paragraph', text: 'Privacy is a hard constraint in Anvil, not a setting. There is no sign-up, no sync, no analytics library, and no external API. Routines, exercises, workout sessions, sets, personal records, and achievements live in a local SQLite database, and preferences such as theme, language, units, and weekly goal live in a SQLite-backed key-value store.' },
							{ type: 'paragraph', text: 'Owning the data also means being able to take it with you. Settings can export everything, including preferences, as a single JSON backup through the share sheet. Importing validates the file’s type, version, and column types before replacing the data in one transaction, so a bad file never leaves the database half-restored.' },
							{ type: 'image', src: '/images/projects/anvil/local-first.webp', alt: { en: 'Diagram: anvil.db holds nine tables and the kv-store holds the preferences, both on the device, with a crossed-out cloud server. An export arrow leads to a backup.json file with app, type, data, and preferences keys, which can be imported on any phone after validation.', es: 'Diagrama: anvil.db contiene nueve tablas y el kv-store guarda las preferencias, ambos en el dispositivo, con un servidor en la nube tachado. Una flecha de exportación lleva a un archivo backup.json con las claves app, type, data y preferences, que se puede importar en cualquier teléfono después de validarlo.' }, caption: { en: 'Nine tables and a handful of preferences, all on the device; a validated JSON backup is the only way out.', es: 'Nueve tablas y unas cuantas preferencias, todo en el dispositivo; un respaldo JSON validado es la única salida.' } },
						],
					},
					{
						heading: 'Routines built set by set',
						blocks: [
							{ type: 'paragraph', text: 'A routine such as Push Day or Leg Day is a list of exercises, and every exercise carries its own per-set plan: reps, rest time, and an optional target weight. Routines and the exercises inside them can be reordered by dragging and removed with a swipe.' },
							{ type: 'paragraph', text: 'Exercises come from a bundled catalog of 302 movements with line-art illustrations (Everkinetic artwork, expanded by Bryl Lim under CC BY-SA 4.0), searchable and filterable by muscle group. Anything missing can be added as a custom exercise with its own muscle group, equipment, and type.' },
							{ type: 'image', src: '/images/projects/anvil/routines.webp', alt: { en: 'Three Anvil screens: the routines list with Push, Pull, and Leg Day; the Push Day routine with five exercises and their sets, reps, and rest; and the Add exercise catalog filtered by muscle group.', es: 'Tres pantallas de Anvil: la lista de rutinas con Push, Pull y Leg Day; la rutina Push Day con cinco ejercicios y sus series, repeticiones y descanso; y el catálogo para añadir ejercicios filtrado por grupo muscular.' }, caption: { en: 'From the routines list to a routine’s exercises and the 302-exercise catalog.', es: 'De la lista de rutinas a los ejercicios de una rutina y al catálogo de 302 ejercicios.' } },
						],
					},
					{
						heading: 'A session built for the gym floor',
						blocks: [
							{ type: 'paragraph', text: 'Starting a routine opens a live session with an elapsed-time stopwatch and progress across exercises. Each set is pre-filled from the plan and adjusted with large steppers whose weight increment is configurable. Marking a set done starts the rest timer; sets can be undone, added, or removed, and exercises can be reordered mid-session.' },
							{ type: 'paragraph', text: 'Real workouts drift from the plan. When a session ends, Anvil detects whether the set count, set values, or exercise order changed and offers to save those changes back to the routine. An active session also cannot be left by accident: it has to be finished or discarded.' },
							{ type: 'image', src: '/images/projects/anvil/session.webp', alt: { en: 'Three screens from a live Leg Day session: the exercise list with elapsed time, the Squat set editor with weight and reps steppers, and the same exercise after the first set with a 2:28 rest countdown.', es: 'Tres pantallas de una sesión de Leg Day en vivo: la lista de ejercicios con el tiempo transcurrido, el editor de series de Squat con controles de peso y repeticiones, y el mismo ejercicio tras la primera serie con una cuenta regresiva de descanso de 2:28.' }, caption: { en: 'A live session: exercise progress, the set editor, and the rest countdown after a completed set.', es: 'Una sesión en vivo: el progreso de los ejercicios, el editor de series y la cuenta regresiva de descanso tras completar una serie.' } },
							{ type: 'paragraph', text: 'The rest timer has to work with the phone in a pocket. Instead of decrementing a counter, it anchors an absolute deadline and schedules a local notification for it. In the foreground the app plays its own chime and vibration and silences the notification; with the screen locked, the operating system delivers the alarm on time, using exact alarms on Android 12 and later. When the app comes back, the countdown catches up to the real remaining time.' },
							{ type: 'image', src: '/images/projects/anvil/rest-timer.webp', alt: { en: 'Diagram: marking a set done sets a deadline 150 seconds ahead and schedules a local notification. In the foreground the app counts down and plays a chime with three vibration pulses; with the screen locked, the OS plays rest_finished.wav at the deadline. Returning to the app re-syncs the countdown.', es: 'Diagrama: marcar una serie como hecha fija una fecha límite 150 segundos adelante y programa una notificación local. En primer plano la app cuenta hacia atrás y reproduce un timbre con tres vibraciones; con la pantalla bloqueada, el sistema reproduce rest_finished.wav a la hora límite. Al volver a la app la cuenta se resincroniza.' }, caption: { en: 'A deadline, not a counter: the rest alarm rings on time whether the app is open or the screen is locked.', es: 'Una fecha límite, no un contador: la alarma de descanso suena a tiempo con la app abierta o con la pantalla bloqueada.' } },
						],
					},
					{
						heading: 'Records forged automatically',
						blocks: [
							{ type: 'paragraph', text: 'Nobody should have to remember their best squat. When a session ends, Anvil compares each exercise’s best set against every previous completed session and records two kinds of personal record: the heaviest weight, and the best estimated one-rep max using the Epley formula. The estimate only counts sets of 1 to 12 reps, where it is reasonably reliable, and the first session on an exercise never counts as a record.' },
							{ type: 'paragraph', text: 'The workout recap brings it together: sets, volume and its change against the last time the routine was done, every record forged, milestones unlocked, the distance to the next one, and how the week stands against the weekly goal.' },
							{ type: 'image', src: '/images/projects/anvil/records.webp', alt: { en: 'The workout recap listing four records forged (weight and 1RM PRs for Squat at 107.5 kg and Leg Press at 200 kg), the Motorcycle milestone, and the next milestone, Grand Piano at 300 kg. Beside it, panels explain PR detection and the Epley formula: 1RM = w × (1 + reps / 30).', es: 'El resumen del entrenamiento con cuatro récords (de peso y de 1RM en Squat con 107.5 kg y Leg Press con 200 kg), el hito Motocicleta y el siguiente hito, Piano de cola con 300 kg. Al lado, paneles explican la detección de récords y la fórmula de Epley: 1RM = w × (1 + reps / 30).' }, caption: { en: 'The recap after a Leg Day, next to the logic that decides what counts as a record.', es: 'El resumen después de un Leg Day, junto a la lógica que decide qué cuenta como récord.' } },
						],
					},
					{
						heading: 'What am I lifting?',
						blocks: [
							{ type: 'paragraph', text: 'Numbers on a bar are abstract, so Anvil translates them. Eight weight milestones run from a watermelon (5 kg) through an adult person (70 kg), a panda (100 kg), and a motorcycle (200 kg) up to a compact car (1,000 kg). Completing a set at or above a threshold unlocks that milestone for the exercise and shows a notification right there in the session.' },
							{ type: 'paragraph', text: 'Milestones are tracked per exercise, so a panda on the deadlift and a panda on the squat are separate wins, and each milestone’s detail shows which exercises earned it and when.' },
							{ type: 'image', src: '/images/projects/anvil/milestones.webp', alt: { en: 'The milestone ladder from Watermelon at 5 kg to Compact car at 1,000 kg, with Motorcycle at 200 kg highlighted; the in-session notification “You just lifted Motorcycle! 200 kg · Leg Press”; and the Panda milestone detail earned with Deadlift, Leg Press, and Squat.', es: 'La escalera de hitos desde Sandía con 5 kg hasta Auto compacto con 1,000 kg, con Motocicleta a 200 kg resaltada; la notificación durante la sesión “You just lifted Motorcycle! 200 kg · Leg Press”; y el detalle del hito Panda conseguido con Deadlift, Leg Press y Squat.' }, caption: { en: 'The milestone ladder, the notification that fires mid-session, and a milestone earned on three exercises.', es: 'La escalera de hitos, la notificación que aparece durante la sesión y un hito conseguido en tres ejercicios.' } },
						],
					},
					{
						heading: 'Achievements that reward showing up',
						blocks: [
							{ type: 'paragraph', text: 'Twenty-five achievements are grouped into strength, volume, consistency, experience, and special categories, many of them tiered from bronze to diamond. Volume tiers track cumulative weight × reps per exercise, from a ton up to a million kilograms. Special achievements reward moments: Early Bird before 6 AM, Night Shift after midnight, One More Rep when a set beats its plan, and Perfect Week when the weekly goal is met.' },
							{ type: 'paragraph', text: 'Consistency is measured in weeks, not days. An early version had a 30-day streak, but rest days are part of training, so it was replaced by consecutive weeks that meet a weekly goal the user sets. An in-progress week never breaks a streak.' },
							{ type: 'image', src: '/images/projects/anvil/achievements.webp', alt: { en: 'Three screens: the Achievements list with strength milestones, the volume and consistency sections with bronze, silver, gold, and diamond tiers and progress bars, and the home screen showing 3 of 3 workouts this week with recent unlocks.', es: 'Tres pantallas: la lista de logros con los hitos de fuerza, las secciones de volumen y constancia con niveles bronce, plata, oro y diamante y barras de progreso, y el inicio con 3 de 3 entrenamientos esta semana y los logros recientes.' }, caption: { en: 'Achievements by category and tier, and the home screen’s view of the current week.', es: 'Los logros por categoría y nivel, y la vista de la semana actual en el inicio.' } },
						],
					},
					{
						heading: 'Statistics without the noise',
						blocks: [
							{ type: 'paragraph', text: 'The statistics tab answers a few direct questions for the week, month, year, or all time: how many sessions, how much time, the average session length, and the number of completed sets. A donut chart shows which muscle groups received the work, and a bar chart shows training frequency, bucketed by day, week, or month depending on the range.' },
							{ type: 'paragraph', text: 'Charts are drawn with Victory Native on top of Skia. Every aggregate only counts completed sessions and completed sets, so a discarded or in-progress workout never skews the numbers.' },
							{ type: 'image', src: '/images/projects/anvil/statistics.webp', alt: { en: 'The Statistics tab for the year: 39 sessions, 38.1 hours, 59-minute average, 624 sets, a muscle distribution donut chart, and a workouts-per-month bar chart. A side panel lists how each range is bucketed.', es: 'La pestaña de estadísticas del año: 39 sesiones, 38.1 horas, 59 minutos de promedio, 624 series, una gráfica de dona con la distribución muscular y una gráfica de barras de entrenamientos por mes. Un panel lateral indica cómo se agrupa cada rango.' }, caption: { en: 'A year of training at a glance, with chart bucketing that adapts to the selected range.', es: 'Un año de entrenamiento de un vistazo, con gráficas que se agrupan según el rango elegido.' } },
						],
					},
					{
						heading: 'Under the hood',
						blocks: [
							{ type: 'paragraph', text: 'Anvil is built with Expo SDK 57, React Native 0.86, and React 19 with the React Compiler, in strict TypeScript. Expo Router provides file-based navigation with typed routes, and Zustand holds preferences persisted to the SQLite key-value store.' },
							{ type: 'paragraph', text: 'Data access is plain SQL through expo-sqlite, organized into modules for routines, workouts, statistics, gamification, achievements, and backups. The schema is versioned with PRAGMA user_version and append-only migrations, eleven so far, and every derivation, from PR detection to consistency streaks, is computed from the workout data itself.' },
							{ type: 'paragraph', text: 'A Jest suite of 80 tests covers workouts, records, achievements, statistics, and backup validation, plus a parity test that fails if any translation key is missing in one language. EAS builds development, preview, and production variants with distinct package names, so all three can be installed side by side on the same phone.' },
							{ type: 'image', src: '/images/projects/anvil/architecture.webp', alt: { en: 'Diagram: Expo Router screens call src/db modules that run plain SQL on anvil.db through expo-sqlite, versioned by PRAGMA user_version with migrations v1 to v11. Side panels list Zustand preferences persisted to the kv-store, 80 Jest tests with a locale parity check, and the toolchain: Expo SDK 57, React Native 0.86, React 19.2, and EAS variants.', es: 'Diagrama: las pantallas de Expo Router llaman a módulos de src/db que ejecutan SQL directo sobre anvil.db mediante expo-sqlite, versionado con PRAGMA user_version y migraciones v1 a v11. Paneles laterales enumeran las preferencias de Zustand guardadas en el kv-store, 80 pruebas de Jest con verificación de paridad de traducciones y las herramientas: Expo SDK 57, React Native 0.86, React 19.2 y variantes de EAS.' }, caption: { en: 'From screen to SQLite in three layers, with preferences, tests, and builds alongside.', es: 'De la pantalla a SQLite en tres capas, con preferencias, pruebas y compilaciones a un lado.' } },
						],
					},
					{
						heading: 'Two languages, two unit systems, two themes',
						blocks: [
							{ type: 'paragraph', text: 'The interface is available in English and Spanish, following the device language or a manual choice. Weights can be shown in kilograms or pounds; the database always stores kilograms and converts only at the display and input boundary, so switching units never rewrites history. Light and dark themes follow the system or can be set explicitly.' },
							{ type: 'image', src: '/images/projects/anvil/languages.webp', alt: { en: 'Three screens in Spanish with the light theme: Settings with Español and Imperial selected and a 5 lb weight increment, an active Push Day session, and the home screen.', es: 'Tres pantallas en español con el tema claro: la configuración con Español e Imperial seleccionados y un incremento de 5 lb, una sesión activa de Push Day y la pantalla de inicio.' }, caption: { en: 'Spanish, imperial units, and the light theme, all switched from Settings.', es: 'Español, unidades imperiales y tema claro, todo desde la configuración.' } },
						],
					},
					{
						heading: 'What I want to explore next',
						blocks: [
							{ type: 'paragraph', text: 'These ideas are on the roadmap and are not implemented yet:' },
							{ type: 'list', items: [
								'Per-exercise progress charts: weight, volume, and estimated one-rep max over time.',
								'Sharing achievements and milestones as images that reveal nothing personal.',
								'A level system based on total volume and completed workouts.',
								'Daily and weekly goals for individual exercises.',
								'Spreadsheet (CSV) export alongside the JSON backup.',
								'A one-time Pro purchase for advanced analytics and custom achievements, with no ads and no subscription.',
							] },
						],
					},
				],
				es: [
					{
						heading: 'Tu historial se queda en tu teléfono',
						blocks: [
							{ type: 'paragraph', text: 'En Anvil la privacidad es una regla, no una opción. No hay registro, sincronización, bibliotecas de analítica ni APIs externas. Rutinas, ejercicios, sesiones, series, récords personales y logros viven en una base de datos SQLite local, y preferencias como el tema, el idioma, las unidades y la meta semanal se guardan en un almacén clave-valor respaldado por SQLite.' },
							{ type: 'paragraph', text: 'Ser dueño de los datos también significa poder llevártelos. Desde la configuración se puede exportar todo, incluidas las preferencias, en un solo respaldo JSON mediante el menú para compartir. Al importar se validan el tipo, la versión y los tipos de cada columna antes de reemplazar los datos en una sola transacción, así un archivo dañado nunca deja la base de datos a medio restaurar.' },
							{ type: 'image', src: '/images/projects/anvil/local-first.webp', alt: { en: 'Diagram: anvil.db holds nine tables and the kv-store holds the preferences, both on the device, with a crossed-out cloud server. An export arrow leads to a backup.json file with app, type, data, and preferences keys, which can be imported on any phone after validation.', es: 'Diagrama: anvil.db contiene nueve tablas y el kv-store guarda las preferencias, ambos en el dispositivo, con un servidor en la nube tachado. Una flecha de exportación lleva a un archivo backup.json con las claves app, type, data y preferences, que se puede importar en cualquier teléfono después de validarlo.' }, caption: { en: 'Nine tables and a handful of preferences, all on the device; a validated JSON backup is the only way out.', es: 'Nueve tablas y unas cuantas preferencias, todo en el dispositivo; un respaldo JSON validado es la única salida.' } },
						],
					},
					{
						heading: 'Rutinas construidas serie por serie',
						blocks: [
							{ type: 'paragraph', text: 'Una rutina como Push Day o Leg Day es una lista de ejercicios, y cada ejercicio lleva su propio plan por serie: repeticiones, tiempo de descanso y un peso objetivo opcional. Las rutinas y sus ejercicios se reordenan arrastrándolos y se eliminan deslizando.' },
							{ type: 'paragraph', text: 'Los ejercicios vienen de un catálogo incluido con 302 movimientos ilustrados (arte de Everkinetic, ampliado por Bryl Lim bajo CC BY-SA 4.0), con búsqueda y filtro por grupo muscular. Lo que falte se puede añadir como ejercicio personalizado con su propio grupo muscular, equipo y tipo.' },
							{ type: 'image', src: '/images/projects/anvil/routines.webp', alt: { en: 'Three Anvil screens: the routines list with Push, Pull, and Leg Day; the Push Day routine with five exercises and their sets, reps, and rest; and the Add exercise catalog filtered by muscle group.', es: 'Tres pantallas de Anvil: la lista de rutinas con Push, Pull y Leg Day; la rutina Push Day con cinco ejercicios y sus series, repeticiones y descanso; y el catálogo para añadir ejercicios filtrado por grupo muscular.' }, caption: { en: 'From the routines list to a routine’s exercises and the 302-exercise catalog.', es: 'De la lista de rutinas a los ejercicios de una rutina y al catálogo de 302 ejercicios.' } },
						],
					},
					{
						heading: 'Una sesión pensada para el gimnasio',
						blocks: [
							{ type: 'paragraph', text: 'Al iniciar una rutina se abre una sesión en vivo con un cronómetro y el progreso de los ejercicios. Cada serie viene precargada desde el plan y se ajusta con controles grandes cuyo incremento de peso es configurable. Marcar una serie como hecha inicia el temporizador de descanso; las series se pueden deshacer, añadir o eliminar, y los ejercicios se pueden reordenar a mitad de la sesión.' },
							{ type: 'paragraph', text: 'Los entrenamientos reales se alejan del plan. Al terminar, Anvil detecta si cambiaron el número de series, sus valores o el orden de los ejercicios, y ofrece guardar esos cambios en la rutina. Además, una sesión activa no se puede abandonar por accidente: hay que terminarla o descartarla.' },
							{ type: 'image', src: '/images/projects/anvil/session.webp', alt: { en: 'Three screens from a live Leg Day session: the exercise list with elapsed time, the Squat set editor with weight and reps steppers, and the same exercise after the first set with a 2:28 rest countdown.', es: 'Tres pantallas de una sesión de Leg Day en vivo: la lista de ejercicios con el tiempo transcurrido, el editor de series de Squat con controles de peso y repeticiones, y el mismo ejercicio tras la primera serie con una cuenta regresiva de descanso de 2:28.' }, caption: { en: 'A live session: exercise progress, the set editor, and the rest countdown after a completed set.', es: 'Una sesión en vivo: el progreso de los ejercicios, el editor de series y la cuenta regresiva de descanso tras completar una serie.' } },
							{ type: 'paragraph', text: 'El temporizador de descanso tiene que funcionar con el teléfono en el bolsillo. En lugar de descontar un contador, fija una hora límite absoluta y programa una notificación local para ese momento. En primer plano la app reproduce su propio timbre y vibración y silencia la notificación; con la pantalla bloqueada, el sistema operativo entrega la alarma a tiempo, usando alarmas exactas en Android 12 o posterior. Al volver a la app, la cuenta regresiva se pone al día con el tiempo real restante.' },
							{ type: 'image', src: '/images/projects/anvil/rest-timer.webp', alt: { en: 'Diagram: marking a set done sets a deadline 150 seconds ahead and schedules a local notification. In the foreground the app counts down and plays a chime with three vibration pulses; with the screen locked, the OS plays rest_finished.wav at the deadline. Returning to the app re-syncs the countdown.', es: 'Diagrama: marcar una serie como hecha fija una fecha límite 150 segundos adelante y programa una notificación local. En primer plano la app cuenta hacia atrás y reproduce un timbre con tres vibraciones; con la pantalla bloqueada, el sistema reproduce rest_finished.wav a la hora límite. Al volver a la app la cuenta se resincroniza.' }, caption: { en: 'A deadline, not a counter: the rest alarm rings on time whether the app is open or the screen is locked.', es: 'Una fecha límite, no un contador: la alarma de descanso suena a tiempo con la app abierta o con la pantalla bloqueada.' } },
						],
					},
					{
						heading: 'Récords que se forjan solos',
						blocks: [
							{ type: 'paragraph', text: 'Nadie debería tener que recordar su mejor sentadilla. Al terminar una sesión, Anvil compara la mejor serie de cada ejercicio con todas las sesiones completadas anteriores y registra dos tipos de récord personal: el mayor peso y la mejor estimación de una repetición máxima con la fórmula de Epley. La estimación solo considera series de 1 a 12 repeticiones, donde es razonablemente confiable, y la primera sesión de un ejercicio nunca cuenta como récord.' },
							{ type: 'paragraph', text: 'El resumen del entrenamiento lo reúne todo: series, volumen y su cambio frente a la última vez que se hizo la rutina, cada récord conseguido, los hitos desbloqueados, la distancia al siguiente y cómo va la semana frente a la meta semanal.' },
							{ type: 'image', src: '/images/projects/anvil/records.webp', alt: { en: 'The workout recap listing four records forged (weight and 1RM PRs for Squat at 107.5 kg and Leg Press at 200 kg), the Motorcycle milestone, and the next milestone, Grand Piano at 300 kg. Beside it, panels explain PR detection and the Epley formula: 1RM = w × (1 + reps / 30).', es: 'El resumen del entrenamiento con cuatro récords (de peso y de 1RM en Squat con 107.5 kg y Leg Press con 200 kg), el hito Motocicleta y el siguiente hito, Piano de cola con 300 kg. Al lado, paneles explican la detección de récords y la fórmula de Epley: 1RM = w × (1 + reps / 30).' }, caption: { en: 'The recap after a Leg Day, next to the logic that decides what counts as a record.', es: 'El resumen después de un Leg Day, junto a la lógica que decide qué cuenta como récord.' } },
						],
					},
					{
						heading: '¿Qué estoy levantando?',
						blocks: [
							{ type: 'paragraph', text: 'Los números en una barra son abstractos, así que Anvil los traduce. Ocho hitos de peso van desde una sandía (5 kg), pasando por una persona adulta (70 kg), un panda (100 kg) y una motocicleta (200 kg), hasta un auto compacto (1,000 kg). Completar una serie igual o por encima de un umbral desbloquea ese hito para el ejercicio y muestra una notificación ahí mismo, durante la sesión.' },
							{ type: 'paragraph', text: 'Los hitos se registran por ejercicio, así que un panda en peso muerto y un panda en sentadilla son logros distintos, y el detalle de cada hito muestra con qué ejercicios se consiguió y cuándo.' },
							{ type: 'image', src: '/images/projects/anvil/milestones.webp', alt: { en: 'The milestone ladder from Watermelon at 5 kg to Compact car at 1,000 kg, with Motorcycle at 200 kg highlighted; the in-session notification “You just lifted Motorcycle! 200 kg · Leg Press”; and the Panda milestone detail earned with Deadlift, Leg Press, and Squat.', es: 'La escalera de hitos desde Sandía con 5 kg hasta Auto compacto con 1,000 kg, con Motocicleta a 200 kg resaltada; la notificación durante la sesión “You just lifted Motorcycle! 200 kg · Leg Press”; y el detalle del hito Panda conseguido con Deadlift, Leg Press y Squat.' }, caption: { en: 'The milestone ladder, the notification that fires mid-session, and a milestone earned on three exercises.', es: 'La escalera de hitos, la notificación que aparece durante la sesión y un hito conseguido en tres ejercicios.' } },
						],
					},
					{
						heading: 'Logros que premian la constancia',
						blocks: [
							{ type: 'paragraph', text: 'Veinticinco logros se agrupan en las categorías de fuerza, volumen, constancia, experiencia y especiales, muchos de ellos con niveles de bronce a diamante. Los niveles de volumen siguen el peso × repeticiones acumulado por ejercicio, desde una tonelada hasta un millón de kilos. Los especiales premian momentos: Madrugador antes de las 6 AM, Turno Nocturno después de medianoche, Una Repetición Más cuando una serie supera lo planeado y Semana Perfecta al cumplir la meta semanal.' },
							{ type: 'paragraph', text: 'La constancia se mide en semanas, no en días. Una versión temprana tenía una racha de 30 días, pero el descanso también es parte del entrenamiento, así que se reemplazó por semanas consecutivas que cumplen una meta semanal elegida por cada persona. Una semana en curso nunca rompe la racha.' },
							{ type: 'image', src: '/images/projects/anvil/achievements.webp', alt: { en: 'Three screens: the Achievements list with strength milestones, the volume and consistency sections with bronze, silver, gold, and diamond tiers and progress bars, and the home screen showing 3 of 3 workouts this week with recent unlocks.', es: 'Tres pantallas: la lista de logros con los hitos de fuerza, las secciones de volumen y constancia con niveles bronce, plata, oro y diamante y barras de progreso, y el inicio con 3 de 3 entrenamientos esta semana y los logros recientes.' }, caption: { en: 'Achievements by category and tier, and the home screen’s view of the current week.', es: 'Los logros por categoría y nivel, y la vista de la semana actual en el inicio.' } },
						],
					},
					{
						heading: 'Estadísticas sin ruido',
						blocks: [
							{ type: 'paragraph', text: 'La pestaña de estadísticas responde unas cuantas preguntas directas para la semana, el mes, el año o todo el historial: cuántas sesiones, cuánto tiempo, la duración promedio y el número de series completadas. Una gráfica de dona muestra qué grupos musculares recibieron el trabajo y una gráfica de barras muestra la frecuencia de entrenamiento, agrupada por día, semana o mes según el rango.' },
							{ type: 'paragraph', text: 'Las gráficas se dibujan con Victory Native sobre Skia. Cada cálculo solo cuenta sesiones y series completadas, así un entrenamiento descartado o en curso nunca altera los números.' },
							{ type: 'image', src: '/images/projects/anvil/statistics.webp', alt: { en: 'The Statistics tab for the year: 39 sessions, 38.1 hours, 59-minute average, 624 sets, a muscle distribution donut chart, and a workouts-per-month bar chart. A side panel lists how each range is bucketed.', es: 'La pestaña de estadísticas del año: 39 sesiones, 38.1 horas, 59 minutos de promedio, 624 series, una gráfica de dona con la distribución muscular y una gráfica de barras de entrenamientos por mes. Un panel lateral indica cómo se agrupa cada rango.' }, caption: { en: 'A year of training at a glance, with chart bucketing that adapts to the selected range.', es: 'Un año de entrenamiento de un vistazo, con gráficas que se agrupan según el rango elegido.' } },
						],
					},
					{
						heading: 'Bajo el capó',
						blocks: [
							{ type: 'paragraph', text: 'Anvil está construida con Expo SDK 57, React Native 0.86 y React 19 con React Compiler, en TypeScript estricto. Expo Router ofrece navegación basada en archivos con rutas tipadas, y Zustand guarda las preferencias en el almacén clave-valor de SQLite.' },
							{ type: 'paragraph', text: 'El acceso a datos es SQL directo mediante expo-sqlite, organizado en módulos para rutinas, entrenamientos, estadísticas, gamificación, logros y respaldos. El esquema se versiona con PRAGMA user_version y migraciones que solo se añaden, once hasta ahora, y cada cálculo, desde la detección de récords hasta las rachas de constancia, se deriva de los propios datos de entrenamiento.' },
							{ type: 'paragraph', text: 'Una suite de 80 pruebas con Jest cubre entrenamientos, récords, logros, estadísticas y la validación de respaldos, además de una prueba de paridad que falla si falta alguna clave de traducción en un idioma. EAS genera variantes de desarrollo, prueba y producción con nombres de paquete distintos, así las tres se pueden instalar al mismo tiempo en el mismo teléfono.' },
							{ type: 'image', src: '/images/projects/anvil/architecture.webp', alt: { en: 'Diagram: Expo Router screens call src/db modules that run plain SQL on anvil.db through expo-sqlite, versioned by PRAGMA user_version with migrations v1 to v11. Side panels list Zustand preferences persisted to the kv-store, 80 Jest tests with a locale parity check, and the toolchain: Expo SDK 57, React Native 0.86, React 19.2, and EAS variants.', es: 'Diagrama: las pantallas de Expo Router llaman a módulos de src/db que ejecutan SQL directo sobre anvil.db mediante expo-sqlite, versionado con PRAGMA user_version y migraciones v1 a v11. Paneles laterales enumeran las preferencias de Zustand guardadas en el kv-store, 80 pruebas de Jest con verificación de paridad de traducciones y las herramientas: Expo SDK 57, React Native 0.86, React 19.2 y variantes de EAS.' }, caption: { en: 'From screen to SQLite in three layers, with preferences, tests, and builds alongside.', es: 'De la pantalla a SQLite en tres capas, con preferencias, pruebas y compilaciones a un lado.' } },
						],
					},
					{
						heading: 'Dos idiomas, dos sistemas de unidades, dos temas',
						blocks: [
							{ type: 'paragraph', text: 'La interfaz está disponible en inglés y español, según el idioma del dispositivo o una elección manual. Los pesos se pueden mostrar en kilos o libras; la base de datos siempre guarda kilos y convierte solo al mostrar o capturar valores, así cambiar de unidades nunca reescribe el historial. Los temas claro y oscuro siguen al sistema o se pueden elegir de forma explícita.' },
							{ type: 'image', src: '/images/projects/anvil/languages.webp', alt: { en: 'Three screens in Spanish with the light theme: Settings with Español and Imperial selected and a 5 lb weight increment, an active Push Day session, and the home screen.', es: 'Tres pantallas en español con el tema claro: la configuración con Español e Imperial seleccionados y un incremento de 5 lb, una sesión activa de Push Day y la pantalla de inicio.' }, caption: { en: 'Spanish, imperial units, and the light theme, all switched from Settings.', es: 'Español, unidades imperiales y tema claro, todo desde la configuración.' } },
						],
					},
					{
						heading: 'Lo que quiero explorar después',
						blocks: [
							{ type: 'paragraph', text: 'Estas ideas están en la hoja de ruta, pero todavía no están implementadas:' },
							{ type: 'list', items: [
								'Gráficas de progreso por ejercicio: peso, volumen y repetición máxima estimada a lo largo del tiempo.',
								'Compartir logros e hitos como imágenes que no revelen nada personal.',
								'Un sistema de niveles basado en el volumen total y los entrenamientos completados.',
								'Metas diarias y semanales para ejercicios individuales.',
								'Exportación a hoja de cálculo (CSV) junto al respaldo JSON.',
								'Una compra única Pro con analítica avanzada y logros personalizados, sin anuncios y sin suscripción.',
							] },
						],
					},
				],
			},
		},
	},
];
