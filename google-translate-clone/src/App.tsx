import { useStore } from './hooks/useStore'

function App () {
  const { fromLang, setFromLanguage } = useStore()
  return (
    <h1 className="text-3xl font-bold underline">
      <button
        onClick={() => { setFromLanguage('es') }}>
          Cambiar a ES
        </button>
        {fromLang}
    </h1>
  )
}

export default App
