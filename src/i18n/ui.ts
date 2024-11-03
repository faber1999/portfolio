type Langs = keyof typeof languages
type UI = Record<Langs, Record<string, string>>

export const languages = {
  en: 'English',
  es: 'Español'
}

export const defaultLang: Langs = 'en'

export const ui: UI = {
  en: {
    'lang.en': 'English',
    'lang.es': 'Spanish',

    'page.title': 'Faber´s Portfolio',

    'nav.home': 'Home',
    'nav.about': 'About',

    'copy.presentation':
      'Hi, I`m Faber, a full-stack web developer with over 6 years of experience in software development. I led Frontend projects at Celuweb, achieving improvements in product delivery and web performance. As a FullStack developer, I have built complex applications using modern technologies, and I enjoy collaborating and optimizing workflows.',
    'copy.web-site-under-construction': 'Web site under construction'
  },
  es: {
    'lang.en': 'Inglés',
    'lang.es': 'Español',

    'page.title': 'Portafolio de Faber',

    'nav.home': 'Inicio',
    'nav.about': 'Sobre',

    'copy.presentation':
      'Hola, soy Faber, un desarrollador web full-stack con más de 6 años de experiencia en desarrollo de software. Lideré proyectos Frontend en Celuweb, logrando mejoras en la entrega de productos y rendimiento web. Como desarrollador FullStack, he construido aplicaciones complejas usando tecnologías modernas y disfruto colaborar y optimizar flujos de trabajo.',
    'copy.web-site-under-construction': 'Sitio web en construcción'
  }
} as const

export const showDefaultLang = false
