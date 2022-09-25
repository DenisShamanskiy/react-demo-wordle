import { createSlice } from '@reduxjs/toolkit'

type CurrentGuessState = {
  currentGuessSlice: string[]
}

const initialState: CurrentGuessState = {
  currentGuessSlice: [],
}

const currentGuessSlice = createSlice({
  name: 'currentGuess',
  initialState,
  reducers: {
    localCurrentGuess(state) {
      state.currentGuessSlice = JSON.parse(localStorage['currentGuess'])
    },
    addCurrentGuess(state, action) {
      state.currentGuessSlice.push(action.payload.pressedKey)
      localStorage.setItem('currentGuess', JSON.stringify(state.currentGuessSlice))
    },
    removeCurrentGuess(state) {
      state.currentGuessSlice.pop()
      localStorage.setItem('currentGuess', JSON.stringify(state.currentGuessSlice))
    },
    resetCurrentGuess(state) {
      state.currentGuessSlice = []
      localStorage.setItem('currentGuess', JSON.stringify(state.currentGuessSlice))
    },
  },
})

export const { localCurrentGuess, addCurrentGuess, removeCurrentGuess, resetCurrentGuess } =
  currentGuessSlice.actions

export default currentGuessSlice.reducer
