import { SectionType } from '../types.d'
import { CopyClipboardIcon } from './Icon'

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

export const TextAreaTranslation = ({ type, loading, value, onChange }: Props) => {
  const isForm = () => (type === SectionType.From)

  const placeHolder = isForm()
    ? 'Introducir Texto'
    : loading === true ? 'Cargando...' : 'Traducción'

  const style = isForm()
    ? 'p-2 resize-none'
    : 'text-white resize-none rounded-md border-2 p-2 bg-gr bg-gray-300'

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className='flex flex-col'>
      <textarea
          autoFocus={isForm()}
          className={style}
          placeholder={placeHolder}
          value = {value}
          onChange={handleOnChange}
          disabled={!isForm()}
      />
    </div>
  )
}
