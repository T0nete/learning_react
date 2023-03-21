import mockProducts from '../mocks/productsResposne.json'

const CATEGORIES_RUTE = 'https://api.escuelajs.co/api/v1/products'

export const getAllProducts = async () => {
  const response = await fetch(CATEGORIES_RUTE)
  const json = await response.json()

  const data = json.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    image: product.images[0],
    category: product.category
  }))

  return data
}
