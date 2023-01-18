import { createSlice } from '@reduxjs/toolkit'
import { authApi } from 'redux/api/authApi'
import { Statistics } from 'redux/api/types'
import { userApi } from 'redux/api/userApi'
import { statistics } from 'utils/constants'

type UserState = {
  id: string | null
  email: string | null
  username: string | null
  isLoggedIn: boolean
  isActivated: boolean
  statistics: Statistics
  roles: string[]
  token: string | null
}

const initialState: UserState = {
  id: null,
  email: null,
  username: null,
  isLoggedIn: false,
  isActivated: false,
  statistics: statistics,
  roles: [],
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.accessToken
      localStorage.setItem('user', JSON.stringify(state))
    },

    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.checkAuth.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.user.id
        state.email = payload.user.email
        state.username = payload.user.username
        state.isLoggedIn = true
        state.isActivated = payload.user.isActivated
        state.statistics = payload.user.statistics
        state.roles = payload.user.roles
        state.token = payload.accessToken
        localStorage.setItem('user', JSON.stringify(state))
      },
    )
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.user.id
        state.email = payload.user.email
        state.username = payload.user.username
        state.isLoggedIn = true
        state.isActivated = payload.user.isActivated
        state.statistics = payload.user.statistics
        state.roles = payload.user.roles
        state.token = payload.accessToken
        localStorage.setItem('user', JSON.stringify(state))
      },
    )
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.user.id
        state.email = payload.user.email
        state.username = payload.user.username
        state.isLoggedIn = true
        state.isActivated = payload.user.isActivated
        state.statistics = payload.user.statistics
        state.roles = payload.user.roles
        state.token = payload.accessToken
        localStorage.setItem('user', JSON.stringify(state))
      },
    )
    builder.addMatcher(
      userApi.endpoints.updateProfile.matchFulfilled,
      (state, { payload }) => {
        state.username = payload.username
        localStorage.setItem('user', JSON.stringify(state))
      },
    )
    builder.addMatcher(
      userApi.endpoints.updateStatistics.matchFulfilled,
      (state, { payload }) => {
        state.statistics = payload
        localStorage.setItem('user', JSON.stringify(state))
      },
    )
  },
})

export const { logout, setToken } = userSlice.actions

export default userSlice.reducer
