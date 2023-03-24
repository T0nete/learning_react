import { useState } from 'react'

export function Filters ({ categories }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Minimum Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='10000'
          onChange={handleChangeMinPrice}
        />
      </div>
      <span>${minPrice}</span>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category'>
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
