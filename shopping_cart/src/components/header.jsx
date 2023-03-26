import { Filters } from './Filters'

export function Header ({ categories }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters categories={categories} />
    </header>

  )
}
