import { createSlice } from '@reduxjs/toolkit'
import { statistics } from 'utils/constants'

type BarRow = {
  name: number
  percent: string
  count: number
}

type StatisticsState = {
  win: number
  loss: number
  surrender: number
  bar: BarRow[]
}

type UserState = {
  id: string | null
  email: string | null
  isLoggedIn: boolean
  isActivated: boolean
  statistics: StatisticsState
}

const initialState: UserState = {
  id: null,
  email: null,
  isLoggedIn: false,
  isActivated: false,
  statistics: statistics,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getLocalUserData(state) {
      const localData = JSON.parse(localStorage['user'])
      state.id = localData.id
      state.email = localData.email
      state.isLoggedIn = localData.isLoggedIn
      state.isActivated = localData.isActivated
      state.statistics = localData.statistics
    },

    setUser(state, action) {
      state.id = action.payload.user.id,
      state.email = action.payload.user.email,
      state.isLoggedIn = true,
      state.isActivated = action.payload.user.isActivated,
      state.statistics = action.payload.user.statistics,
      localStorage.setItem('user', JSON.stringify(state))
    },
    
    logout(state) {
      state.id = null
      state.email = null
      state.isLoggedIn = false
      localStorage.setItem('user', JSON.stringify(state))
    },
    updateStatsLocal(state, action) {
      if (action.payload.result === 'WIN') {
        state.statistics.win = state.statistics.win + 1
        state.statistics.bar = state.statistics.bar.map((item, index) => {
          return {
            name: item.name,
            count: index === action.payload.currentRowIndex ? item.count + 1 : item.count,
            percent:
              index === action.payload.currentRowIndex
                ? `${Math.round((100 / state.statistics.win) * (item.count + 1))}%`
                : `${Math.round((100 / state.statistics.win) * item.count)}%`,
          }
        })
      } else if (action.payload.result === 'FAIL') {
        state.statistics.loss = state.statistics.loss + 1
      } else {
        state.statistics.surrender = state.statistics.surrender + 1
      }
      localStorage.setItem('user', JSON.stringify(state))
    },
  },
})

export const {
  getLocalUserData,
  setUser,
  logout,
  updateStatsLocal
} = userSlice.actions

export default userSlice.reducer
