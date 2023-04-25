import { useEffect } from 'react'
import { CopyClipboardIcon, SpeakerIcon, SwapIcon } from './components/Icon'
import { LanguageSelector } from './components/LanguageSelector'
import { TextAreaTranslation } from './components/TextAreaTranslation'
import { AUTO_LANGUAGE } from './constatns'
import { useDebounce } from './hooks/useDebounce'
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
    setFromText,
    setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debouncedFromText === '') return
    setResult(debouncedFromText)
  }, [debouncedFromText, fromLang, toLang])

  const handleClipBoard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLang
    speechSynthesis.speak(utterance)
  }

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

              <TextAreaTranslation
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
            </div>
          </div>
          <div className="w-full justify-center items-center sm:w-1/8 md:w-1/9 lg:w-1/12 xl:w-1/12 p-4 items-center">
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

              <div className='relative'>
                <TextAreaTranslation
                  type={SectionType.To}
                  value={result}
                  loading={loading}
                  onChange={setResult}
                />
                {
                  result.length > 0 &&
                  <div className='absolute bottom-0 left-0 p-2 flex flex-row' >
                     <button onClick={handleClipBoard} >
                      <CopyClipboardIcon/>
                    </button>
                    <button onClick={handleSpeak} >
                      <SpeakerIcon/>
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
