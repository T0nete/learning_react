import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constatns'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
    | { type: SectionType.From, value: FromLanguage, onChange: (Language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, onChange: (Language: Language) => void }

export const LanguageSelector = ({ type, value, onChange }: Props) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <select
        onChange={(event) => { handleOnChange(event) }}
        value={value}
        >
            {type === SectionType.From &&
                <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
          return (
            <option
                key={key}
                value={key}>
                {literal}
            </option>
          )
        })}
    </select>
  )
}
