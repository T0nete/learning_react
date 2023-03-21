import './App.css'
import { useCategories } from './hooks/useCategories'
import { useProducts } from './hooks/useProducts'

function App () {
  const { categories, categoriesError } = useCategories()
  const { products, productsError, productsLoading } = useProducts()

  return (
    <div className='bodyContent'>
      <h1>Shopping Cart</h1>
      {/* <ul>
        {
          categories &&
            <ul>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <p>{category.name}</p>
                  </li>
                ))
              }
            </ul>
        }
      </ul> */}

      {productsLoading && <p>Loading....</p>}
      <ul className='productList'>
        {
           products.map(product => (
             <li key={product.id} className='productCard'>
               <h3>{product.title}</h3>
               <p>{product.description}</p>
               <img src={product.image} alt={product.title} />
             </li>
           ))
        }
      </ul>
      {productsError && <p>Error</p>}
    </div>

  )
}

export default App
