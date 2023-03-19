const API_KEY = 'c138bfc4'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    // fetch(`https://www.omdbapi.com/?apikey=c138bfc4&s=${search}`)
    // .then(response => response.json())
    // .then(json => {})
    const resposne = await fetch(`https://www.omdbapi.com/?apikey=c138bfc4&s=${search}`)
    const json = await resposne.json()

    const movies = json.Search

    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
