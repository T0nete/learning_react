import categoriesData from '../mocks/categoriesResposne.json'
const CATEGORIES_RUTE = 'https://api.escuelajs.co/api/v1/categories'

export const getCategories = async () => {
  const resposne = await fetch(CATEGORIES_RUTE)
  const json = await resposne.json()

  const data = json.map(category => ({
    id: category.id,
    name: category.name
  }))

  return data
}

// export const getCategories = () => {
// return fetch('https://api.escuelajs.co/api/v1/categories')
//   .then(res => res.json())
//   .then(json => {
//     const data = json.map(category => ({
//       id: category.id,
//       name: category.name
//     }))
//     return data
//   })
// }
