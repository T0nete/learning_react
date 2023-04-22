import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constatns'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLang: string
  toLang: string
  fromText: string
  result: string
  loading: boolean
}

export type typeAction =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_FROM_LANGUAGE', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: string }
    | { type: 'SET_RESULT', payload: string }
