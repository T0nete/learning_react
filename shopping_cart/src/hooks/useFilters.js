import { useContext } from 'react'
import { FiltersContext } from '../contexts/filtres'
import { useCategories } from './useCategories'

export function useFilteres () {
  const { categories, categoriesError } = useCategories()

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const { filters, setFilters } = useContext(FiltersContext)

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
  return { filterProducts, setFilters, categories, categoriesError }
}
