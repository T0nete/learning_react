import { useEffect } from 'react'
import { useCart } from '../hooks/useCart'

export function ProductList ({ productList }) {
  const { addToCart, cart, removeFromCart } = useCart()

  function checkProductInCart (products, product) {
    return cart.some(item => item.id === product.id)
  }

  return (
    <ul className='productList'>
      {
           productList.map(product => (
             // const isProductInCart = chekcProductInCart(product)
             <li key={product.id} className='productCard'>
               <h3>{product.title}</h3>
               <strong>$ {product.price}</strong>
               {/* <p>{product.description}</p> */}
               <img src={product.image} alt={product.title} />
               {
                  !checkProductInCart(product)
                    ? <button onClick={() => addToCart(product)}>
                      Add
                      </button>
                    : <button onClick={() => removeFromCart(product)}>
                      Delete
                      </button>
               }

             </li>
           ))
        }
    </ul>
  )
}
