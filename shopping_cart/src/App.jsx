import { useState } from 'react'
import './App.css'
import { Filters } from './components/filters'
import { ProductList } from './components/productsList'
import { useCategories } from './hooks/useCategories'
import { useProducts } from './hooks/useProducts'

function App () {
  const { categories, categoriesError } = useCategories()
  const { products, productsError, productsLoading } = useProducts()

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
            (
              filters.category === 'all' ||
              filters.category === product.category
            )
      )
    })
  }

  const fitleredProducts = filterProducts(products)

  return (
    <div className='bodyContent'>
      <h1>Shopping Cart</h1>
      <Filters categories={categories} />
      {productsLoading && <p>Loading....</p>}
      <ProductList productList={fitleredProducts} />
      {productsError && <p>Error</p>}
    </div>

  )
}

export default App
