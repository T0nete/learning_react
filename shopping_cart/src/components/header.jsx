import { Filters } from './filters'

export function Header ({ categories, changeFilters }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters categories={categories} changeFilters={changeFilters} />
    </header>

  )
}
