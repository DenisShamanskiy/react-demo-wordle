import { createSlice } from '@reduxjs/toolkit'

type GuessesRemainingState = {
  guessesRemainingSlice: number
}

const initialState: GuessesRemainingState = {
  guessesRemainingSlice: 6,
}

const guessesRemainingSlice = createSlice({
  name: 'guessesRemaining',
  initialState,
  reducers: {
    localGuessesRemaining(state) {
      state.guessesRemainingSlice = Number(localStorage.getItem('guessesRemaining'))
    },
    resetGuessesRemaining(state) {
      state.guessesRemainingSlice = 0
      localStorage.setItem('guessesRemaining', state.guessesRemainingSlice.toString())
    },
    decreaseGuessesRemaining(state) {
      state.guessesRemainingSlice = state.guessesRemainingSlice - 1
      localStorage.setItem('guessesRemaining', state.guessesRemainingSlice.toString())
    },
    restartGuessesRemaining(state) {
      state.guessesRemainingSlice = 6
      localStorage.setItem('guessesRemaining', state.guessesRemainingSlice.toString())
    },
  },
})

export const {
  localGuessesRemaining,
  resetGuessesRemaining,
  decreaseGuessesRemaining,
  restartGuessesRemaining,
} = guessesRemainingSlice.actions

export default guessesRemainingSlice.reducer
