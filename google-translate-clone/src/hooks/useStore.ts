import { useReducer } from 'react'
import { type typeAction, type State, type Language, type FromLanguage } from '../types'
import { AUTO_LANGUAGE } from '../constatns'

const initialState: State = {
  fromLang: 'auto',
  toLang: 'es',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: typeAction) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLang === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLang: state.toLang,
      toLang: state.fromLang
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      loading: true,
      fromLang: action.payload,
      result: ''
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLang: action.payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore () {
  const [
    {
      fromLang,
      toLang,
      fromText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)

  const interChangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }
  const setResult = (payload: Language) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLang,
    toLang,
    fromText,
    result,
    loading,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    setResult
  }
}
