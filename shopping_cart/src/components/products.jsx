import { ProductList } from './productsList'

export function Products ({ products, productsLoading, productsError }) {
  return (
    <main>
      {productsLoading && <p>Loading....</p>}
      <ProductList productList={products} />
      {productsError && <p>Error</p>}
    </main>

  )
}
