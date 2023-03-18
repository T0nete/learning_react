function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <div className='row'>
              <h3>{movie.title} <span className='year'>( {movie.year} )</span></h3>
            </div>
            <img src={movie.poster} alt={movie.title} />
          </li>

        ))
    }
    </ul>
  )
}

function MoviesWithoutResults () {
  return (
    <p>No results</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <MoviesWithoutResults />
  )
}
