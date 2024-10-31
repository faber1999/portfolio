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

    'copy.web-site-under-construction': 'Web site under construction'
  },
  es: {
    'lang.en': 'Inglés',
    'lang.es': 'Español',

    'page.title': 'Portafolio de Faber',

    'nav.home': 'Inicio',
    'nav.about': 'Sobre',

    'copy.web-site-under-construction': 'Sitio web en construcción'
  }
} as const

export const showDefaultLang = false
