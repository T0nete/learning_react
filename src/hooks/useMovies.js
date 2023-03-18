import withData from '../mocks/withData.json'
import withoutData from '../mocks/withoutData.json'

export function useMovies () {
  const movies = withData.Search

  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
