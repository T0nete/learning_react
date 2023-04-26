import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'Toni',
    email: 'tonibarrantes@gmail.com',
    github: 'T0nete'
  },
  {
    id: '2',
    name: 'Maria',
    email: 'maria@gmail.com',
    github: 'MariaGit'
  },
  {
    id: '3',
    name: 'Paula',
    email: 'paula@gmail.com',
    github: 'PaulaGit'
  }

]

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deletUserById: (state, action: PayloadAction<UserId>) => {
      console.log('deleteUserById')
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default userSlice.reducer
export const { deletUserById } = userSlice.actions
