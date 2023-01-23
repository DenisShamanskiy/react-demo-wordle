import { createSlice } from '@reduxjs/toolkit'
import { Statistics } from 'redux/api/types'
// import { userApi } from 'redux/api/userApi'

export type UserAdmin = {
  id: string
  email: string
  username: string
  isActivated: false
  roles: string[]
  statistics: Statistics
}

type UsersState = {
  users: UserAdmin[]
}

const initialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     userApi.endpoints.getUsers.matchFulfilled,
  //     (state, { payload }) => {
  //       state.users = payload
  //     },
  //   )
  // },
})

export default usersSlice.reducer
