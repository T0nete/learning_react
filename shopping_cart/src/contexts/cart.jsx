import { createContext, useReducer } from 'react'
import { CART_ACTION_TYPES, cartReducer, cartInitialState } from '../reducers/cart'
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const checkProductInCart = product => dispatch({
    type: CART_ACTION_TYPES.CHECK_PRODUCT_IN_CART,
    payload: product
  })

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  return { state, checkProductInCart, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  // const [cart, setCart] = useState([])

  // const checkProductInCart = product => {
  //   return cart.some(item => item.id === product.id)
  // }

  // const addToCart = product => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]))
  // }

  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }
  const { state, checkProductInCart, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      checkProductInCart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
