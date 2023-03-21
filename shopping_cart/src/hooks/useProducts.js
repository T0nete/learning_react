import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/fetchProducts'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [productsError, setProductsError] = useState('')
  const [productsLoading, setProductsLoading] = useState(false)

  useEffect(() => {
    try {
      setProductsLoading(true)
      getAllProducts().then(setProducts)
    } catch (e) {
      setProductsError(e.message)
    } finally {
      setProductsLoading(false)
    }
  }, [])

  return { products, productsError, productsLoading }
}
