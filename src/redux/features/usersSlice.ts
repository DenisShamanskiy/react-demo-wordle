import { createSlice } from '@reduxjs/toolkit'
import { Statistics } from 'redux/api/types'
import { userApi } from 'redux/api/userApi'

export type UserAdmin = {
  _id: string
  email: string
  password: string
  username: string
  isActivated: false
  activationLink: string
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
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload
        localStorage.setItem('users', JSON.stringify(state))
      },
    )
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     authApi.endpoints.checkAuth.matchFulfilled,
  //     (state, { payload }) => {
  //       state.id = payload.user.id
  //       state.email = payload.user.email
  //       state.username = payload.user.username
  //       state.isLoggedIn = true
  //       state.isActivated = payload.user.isActivated
  //       state.statistics = payload.user.statistics
  //       state.roles = payload.user.roles
  //       state.token = payload.accessToken
  //       localStorage.setItem('user', JSON.stringify(state))
  //     },
  //   )
  //   builder.addMatcher(
  //     authApi.endpoints.signup.matchFulfilled,
  //     (state, { payload }) => {
  //       state.id = payload.user.id
  //       state.email = payload.user.email
  //       state.username = payload.user.username
  //       state.isLoggedIn = true
  //       state.isActivated = payload.user.isActivated
  //       state.statistics = payload.user.statistics
  //       state.roles = payload.user.roles
  //       state.token = payload.accessToken
  //       localStorage.setItem('user', JSON.stringify(state))
  //     },
  //   )
  //   builder.addMatcher(
  //     authApi.endpoints.signin.matchFulfilled,
  //     (state, { payload }) => {
  //       state.id = payload.user.id
  //       state.email = payload.user.email
  //       state.username = payload.user.username
  //       state.isLoggedIn = true
  //       state.isActivated = payload.user.isActivated
  //       state.statistics = payload.user.statistics
  //       state.roles = payload.user.roles
  //       state.token = payload.accessToken
  //       localStorage.setItem('user', JSON.stringify(state))
  //     },
  //   )
  //   builder.addMatcher(
  //     userApi.endpoints.updateProfile.matchFulfilled,
  //     (state, { payload }) => {
  //       state.username = payload.username
  //       localStorage.setItem('user', JSON.stringify(state))
  //     },
  //   )
  //   builder.addMatcher(
  //     userApi.endpoints.updateStatistics.matchFulfilled,
  //     (state, { payload }) => {
  //       state.statistics = payload
  //       localStorage.setItem('user', JSON.stringify(state))
  //     },
  //   )
  // },
})

export const { logout } = usersSlice.actions

export default usersSlice.reducer
