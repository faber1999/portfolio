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

    'home.title': 'Welcome to the app'
  },
  es: {
    'lang.en': 'Inglés',
    'lang.es': 'Español',

    'page.title': 'Portafolio de Faber',

    'nav.home': 'Inicio',
    'nav.about': 'Sobre',

    'home.title': 'Bienvenido a la app'
  }
} as const

export const showDefaultLang = false
