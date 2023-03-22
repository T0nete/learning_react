// const CATEGORIES_RUTE = 'https://api.escuelajs.co/api/v1/products'
const CATEGORIES_RUTE = 'https://fakestoreapi.com/products'

export const getAllProducts = async () => {
  const response = await fetch(CATEGORIES_RUTE)
  const json = await response.json()

  const data = json.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    image: product.image,
    category: product.category,
    price: product.price
  }))

  return data
}
