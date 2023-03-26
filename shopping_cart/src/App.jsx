import './App.css'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './contexts/cart'
import { useFilteres } from './hooks/useFilters'
import { useProducts } from './hooks/useProducts'

function App () {
  const { products, productsError, productsLoading } = useProducts()
  const { filterProducts, categories } = useFilteres()

  const fitleredProducts = filterProducts(products)

  return (
    <CartProvider>
      <div className='bodyContent'>
        <Header categories={categories} />
        <Products
          products={fitleredProducts}
          productsLoading={productsLoading}
          productsError={productsError}
        />
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App
