import { useState, useEffect } from 'react'
import { getCategories } from '../services/fetchCategories'

export function useCategories () {
  const [categories, setCategories] = useState([])
  const [categoriesError, setCategoriesError] = useState(null)

  //   const getCategories = async () => {
  //     try {
  // const getCategories = async () => {
  //   try {
  //     setCategoriesError(null)
  //     const newCategories = await fetchCategories()
  //     console.log(newCategories)
  //     setCategories(newCategories)
  //   } catch (e) {
  //     setCategoriesError(e.message)
  //   }
  // }

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  //     } catch (e) {
  //       setCategoriesError(e.message)
  //     }
  //   }

  return { categories, categoriesError }
}
