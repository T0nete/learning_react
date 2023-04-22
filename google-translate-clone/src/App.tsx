import { SwapIcon } from './components/Icon'
import { LanguageSelector } from './components/LanguageSelector'
import { AUTO_LANGUAGE } from './constatns'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App () {
  const {
    fromLang,
    toLang,
    fromText,
    result,
    loading,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    setResult
  } = useStore()

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-wrap justify-center items-center'>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold'>From</h2>
              <LanguageSelector
                type={SectionType.From}
                value={fromLang}
                onChange={setFromLanguage}/>
              <textarea
                className='rounded-md border-2 p-2'
                placeholder='Introducir Texto'
                autoFocus
                />
            </div>
          </div>
          <div className="w-full sm:w-1/8 md:w-1/9 lg:w-1/12 xl:w-1/12 p-4 items-center">
            <button
              disabled={fromLang === AUTO_LANGUAGE}
              onClick={() => { interChangeLanguages() }}
            >
              <SwapIcon />
            </button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className='flex flex-col gap-2'>
              <h2 className='font-semibold'>To</h2>
              <LanguageSelector
                type={SectionType.To}
                value={toLang}
                onChange={setToLanguage}/>
              <textarea
                className='rounded-md border-2 p-2'
                placeholder=''
                />
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
