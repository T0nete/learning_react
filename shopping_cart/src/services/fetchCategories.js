// const CATEGORIES_RUTE = 'https://api.escuelajs.co/api/v1/categories'

const CATEGORIES_RUTE = 'https://fakestoreapi.com/products/categories'

export const getCategories = async () => {
  const resposne = await fetch(CATEGORIES_RUTE)
  const json = await resposne.json()

  const data = json.map(category => ({
    id: Math.random().toString(36).substring(2, 6),
    name: category
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
