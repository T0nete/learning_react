function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title} (<span />{movie.year})</h3>
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
  console.log(movies)
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <MoviesWithoutResults />
  )
}
