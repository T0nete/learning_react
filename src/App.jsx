import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

/**
 useRef
 Permite crear una referencia mutable que persiste durante todo el ciclo de vida
 del componente. util para guardar cualquier valor que pueda mutar (id, elemento dom, contador..)
 cada vez que cambia NO vuelve a renderizar el componente
 El valor persiste entre renderizados
 */

function App () {
  const { movies } = useMovies()

  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const input = inputRef.current
    // const { value } = input

    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' type='text' placeholder='Harry Potter' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
