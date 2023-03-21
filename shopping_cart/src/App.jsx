import { useEffect, useState } from 'react'
import './App.css'
import { useCategories } from './hooks/useCategories'

function App () {
  const { categories, categoriesError } = useCategories()

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {
          categories &&
            <ul>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <p>{category.name}</p>
                  </li>
                ))
              }
            </ul>
        }
      </ul>
    </div>

  )
}

export default App
