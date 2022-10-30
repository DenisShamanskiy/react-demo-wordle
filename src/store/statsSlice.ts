import { createSlice } from '@reduxjs/toolkit'
import { stats } from 'utils/constants'

type BarRow = {
  name: number
  percent: string
  count: number
}
type StatsState = {
  win: number
  loss: number
  surrender: number
  bar: BarRow[]
}

const initialState: StatsState = stats

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    getLocalStatsData(state) {
      const { win, loss, surrender, bar } = JSON.parse(localStorage['stats'])
      state.win = win
      state.loss = loss
      state.surrender = surrender
      state.bar = bar
    },
    updateStatsLocal(state, action) {
      if (action.payload.result === 'WIN') {
        state.win = state.win + 1
        state.bar = state.bar.map((item, index) => {
          return {
            name: item.name,
            count: index === action.payload.currentRowIndex ? item.count + 1 : item.count,
            percent:
              index === action.payload.currentRowIndex
                ? `${Math.round((100 / state.win) * (item.count + 1))}%`
                : `${Math.round((100 / state.win) * item.count)}%`,
          }
        })
      } else if (action.payload.result === 'FAIL') {
        state.loss = state.loss + 1
      } else {
        state.surrender = state.surrender + 1
      }
      localStorage.setItem('stats', JSON.stringify(state))
    },
    resetStats(state) {
      state = stats
      localStorage.setItem('stats', JSON.stringify(state))
    },
  },
})

export const { getLocalStatsData, resetStats, updateStatsLocal } = statsSlice.actions

export default statsSlice.reducer
