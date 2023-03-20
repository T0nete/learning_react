import './App.css'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

/**
 useRef
 Permite crear una referencia mutable que persiste durante todo el ciclo de vida
 del componente. util para guardar cualquier valor que pueda mutar (id, elemento dom, contador..)
 cada vez que cambia NO vuelve a renderizar el componente
 El valor persiste entre renderizados
 */

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Movie can not be blank')
      return
    }

    if (search.length < 3) {
      setError('Movie must have at least 3 characters')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error, isFirstInput }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleOnChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
    // const input = inputRef.current
    // const { value } = input

    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    // console.log(query)
  }

  const handleOnCheck = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            style={{
              border: '1px solid trasparent',
              borderColor: error ? 'red' : 'trasparent'
            }} onChange={handleOnChange} value={search} name='query' type='text' placeholder='Harry Potter'
          />
          <input type='checkbox' onChange={handleOnCheck} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
        loading ? <p>Loading...</p> : <Movies movies={movies} />
      }
      </main>
    </div>
  )
}

export default App
