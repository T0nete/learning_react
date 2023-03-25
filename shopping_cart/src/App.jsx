import './App.css'
import { Header } from './components/header'
import { Products } from './components/products'
import { useFilteres } from './hooks/useFilters'
import { useProducts } from './hooks/useProducts'

function App () {
  const { products, productsError, productsLoading } = useProducts()
  const { filterProducts, categories } = useFilteres()

  const fitleredProducts = filterProducts(products)

  return (
    <div className='bodyContent'>
      <Header categories={categories} />
      <Products
        products={fitleredProducts}
        productsLoading={productsLoading}
        productsError={productsError}
      />
    </div>
  )
}

export default App
