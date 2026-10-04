import type { Lang } from './site';

/** Home page copy. Strings may contain inline HTML (highlights, line breaks); they are rendered with set:html. */
const en = {
	pageTitle: 'Javier Cazares — Software Developer in Ciudad Juárez & El Paso',
	metaDescription: 'Independent developer on the Juárez–El Paso border building custom web apps, internal tools and MVPs for small and medium businesses. English & Spanish.',
	ogImageAlt: 'The jc logo beside the greeting: Javier Cazares, software with purpose.',
	navLabel: 'Main navigation',
	navServices: '[ SERVICES ]', navWork: '[ WORK ]', navStack: '[ STACK ]', navCareer: '[ LOG ]', navContact: '[ CONTACT ]',
	heroKicker: 'INDEPENDENT DEVELOPER', heroLocation: 'CD. JUÁREZ — EL PASO', heroCommand: 'cd ~/the-good-stuff',
	heroLine1: 'A space for', heroLine2: 'things <span class="highlight">made</span>', heroLine3: 'with purpose',
	heroIntro: 'Hi, I’m Javier, an independent software developer in Ciudad Juárez. I help small and medium businesses on both sides of the border turn ideas into useful software.',
	heroLink: 'TAKE A LOOK AROUND',
	currentMode: 'CURRENT MODE', makingThings: 'MAKING THINGS',
	servicesIndex: '01 / SERVICES', servicesTitle: 'What I can build for you', servicesIntro: 'Small and medium software projects, built end to end.',
	services: [
		{ command: './web-apps', title: 'CUSTOM WEB APPS', body: 'Web applications shaped around how your business actually works: client portals, dashboards, booking, inventory.' },
		{ command: './automate', title: 'INTERNAL TOOLS & AUTOMATION', body: 'Replace spreadsheet juggling and repetitive manual steps with software your team will actually use.' },
		{ command: './mvp', title: 'MVPs FOR NEW PRODUCTS', body: 'Take an idea out of the notebook and into a first working version you can put in front of real users.' },
		{ command: './integrate', title: 'MODERNIZATION & INTEGRATIONS', body: 'Extend or rescue an existing system, and connect it to the APIs, payments and services you already rely on.' },
	],
	servicesArea: 'Based in Ciudad Juárez, working with businesses in Juárez, Chihuahua, El Paso, Las Cruces and across northern Mexico and the southern US. Bilingual (English / Spanish), on Juárez–El Paso time.',
	servicesCta: 'START A PROJECT',
	workIndex: '02 / SELECTED WORK', workTitle: 'Things I’ve made',
	workIntro: 'A few projects, experiments, and ideas that made it out of the notebook.', workNote: 'A living collection. More in progress, always.',
	readProject: 'READ PROJECT NOTE',
	stackIndex: '03 / THE STACK', stackTitle: 'What I build with', stackIntro: 'Curiosity is part of the toolkit.',
	careerIndex: '04 / THE LOG', careerTitle: 'How I got here', careerIntro: 'A career, read like a git log. Pick a commit.',
	contactIndex: '05 / YOUR TURN', contactStatus: 'OPEN TO GOOD IDEAS', contactCommand: './say-hello', contactTitle: 'Got a good<br />one',
	contactCopy: 'A project, a question, a half-formed thought.<br />I’m listening.', ideaLabel: '&gt; SYSTEM READY. DROP YOUR IDEA BELOW:',
	ideaPlaceholder: 'I’ve been thinking about...', formHelp: 'GOES STRAIGHT TO MY INBOX.', sendNote: '[ EXECUTE SEND', emailLabel: '&gt; REPLY TO (OPTIONAL):',
	footerMade: 'MADE WITH INTENTION &amp; A LOT OF COFFEE.', backTop: 'BACK TO TOP ↑',
	formMessages: {
		sending: 'TRANSMITTING...', sent: 'RECEIVED. I’LL GET BACK TO YOU.', captcha: 'VERIFICATION PENDING. TRY AGAIN IN A SECOND.', failed: 'SEND FAILED. YOUR NOTE WAS COPIED — EMAIL IT TO ME.',
	},
};

const es: typeof en = {
	pageTitle: 'Javier Cazares — Desarrollador de software en Ciudad Juárez y El Paso',
	metaDescription: 'Desarrollador independiente en la frontera Juárez–El Paso. Software a la medida, aplicaciones web y MVPs para pymes del norte de México y el sur de EE. UU.',
	ogImageAlt: 'El logo jc junto al saludo: Javier Cazares, software con propósito.',
	navLabel: 'Navegación principal',
	navServices: '[ SERVICIOS ]', navWork: '[ PROYECTOS ]', navStack: '[ STACK ]', navCareer: '[ LOG ]', navContact: '[ CONTACTO ]',
	heroKicker: 'DESARROLLADOR INDEPENDIENTE', heroLocation: 'CD. JUÁREZ — EL PASO', heroCommand: 'cd ~/buenas-ideas',
	heroLine1: 'Un espacio para', heroLine2: 'cosas <span class="highlight">hechas</span>', heroLine3: 'con propósito',
	heroIntro: 'Hola, soy Javier, desarrollador de software independiente en Ciudad Juárez. Ayudo a pequeñas y medianas empresas de ambos lados de la frontera a convertir sus ideas en software útil.',
	heroLink: 'ECHA UN VISTAZO',
	currentMode: 'MODO ACTUAL', makingThings: 'CREANDO COSAS',
	servicesIndex: '01 / SERVICIOS', servicesTitle: 'Lo que puedo construir para ti', servicesIntro: 'Proyectos de software pequeños y medianos, de principio a fin.',
	services: [
		{ command: './apps-web', title: 'APLICACIONES WEB A LA MEDIDA', body: 'Aplicaciones web hechas a partir de cómo trabaja tu negocio: portales para clientes, dashboards, reservas, inventarios.' },
		{ command: './automatiza', title: 'HERRAMIENTAS INTERNAS Y AUTOMATIZACIÓN', body: 'Cambia las hojas de cálculo y los pasos manuales repetitivos por software que tu equipo sí va a usar.' },
		{ command: './mvp', title: 'MVPs PARA PRODUCTOS NUEVOS', body: 'Saca una idea del cuaderno y llévala a una primera versión funcional que puedas poner frente a usuarios reales.' },
		{ command: './integra', title: 'MODERNIZACIÓN E INTEGRACIONES', body: 'Amplía o rescata un sistema existente y conéctalo con las APIs, pagos y servicios que ya usas.' },
	],
	servicesArea: 'Desde Ciudad Juárez, trabajo con empresas de Juárez, Chihuahua, El Paso, Las Cruces y de todo el norte de México y el sur de Estados Unidos. Bilingüe (español / inglés), en horario de Juárez–El Paso.',
	servicesCta: 'EMPIEZA UN PROYECTO',
	workIndex: '02 / PROYECTOS', workTitle: 'Cosas que he creado',
	workIntro: 'Proyectos, experimentos e ideas que salieron del cuaderno.', workNote: 'Una colección viva. Siempre hay algo más en camino.',
	readProject: 'LEER SOBRE EL PROYECTO',
	stackIndex: '03 / EL STACK', stackTitle: 'Con qué construyo', stackIntro: 'La curiosidad también es parte del oficio.',
	careerIndex: '04 / EL LOG', careerTitle: 'Cómo llegué aquí', careerIntro: 'Una trayectoria, leída como un git log. Elige un commit.',
	contactIndex: '05 / TU TURNO', contactStatus: 'ABIERTO A BUENAS IDEAS', contactCommand: './di-hola', contactTitle: '¿Tienes una<br />buena idea',
	contactCopy: 'Un proyecto, una pregunta, una idea a medio formar.<br />Te leo.', ideaLabel: '&gt; SISTEMA LISTO. CUÉNTAME TU IDEA:',
	ideaPlaceholder: 'He estado pensando en...', formHelp: 'LLEGA DIRECTO A MI BANDEJA.', sendNote: '[ EJECUTAR ENVÍO', emailLabel: '&gt; RESPONDER A (OPCIONAL):',
	footerMade: 'HECHO CON INTENCIÓN Y MUCHO CAFÉ.', backTop: 'VOLVER ARRIBA ↑',
	formMessages: {
		sending: 'TRANSMITIENDO...', sent: 'RECIBIDO. TE RESPONDO PRONTO.', captcha: 'VERIFICACIÓN PENDIENTE. INTENTA DE NUEVO EN UN SEGUNDO.', failed: 'FALLÓ EL ENVÍO. TU MENSAJE SE COPIÓ — ENVÍAMELO POR CORREO.',
	},
};

export const homeCopy: Record<Lang, typeof en> = { en, es };
