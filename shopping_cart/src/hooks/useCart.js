import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used withina CartProvider')
  }

  return context
}
