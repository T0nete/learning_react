import { configureStore } from '@reduxjs/toolkit'
import useresReducer from './users/slice'

export const store = configureStore({
  reducer: {
    users: useresReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
