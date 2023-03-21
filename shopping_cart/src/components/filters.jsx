export function Filters ({ categories }) {
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Minimum Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='10000'
        />
      </div>
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
