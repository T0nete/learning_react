import { useState, useId, useContext } from 'react'
import { FiltersContext } from '../contexts/filtres'

export function Filters ({ categories }) {
  const { filters, setFilters } = useContext(FiltersContext)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='500'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
      <span>${filters.minPrice}</span>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          {
            categories && categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
