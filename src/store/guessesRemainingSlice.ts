import { createSlice } from "@reduxjs/toolkit";

type GuessesRemainingState = {
  guessesRemainingSlice: number;
}

const initialState: GuessesRemainingState = {
  guessesRemainingSlice: 6,
}

const guessesRemainingSlice = createSlice({
  name: "guessesRemaining",
  initialState,
  reducers: {
    resetGuessesRemaining(state) {
      state.guessesRemainingSlice = 0
    },
    decreaseGuessesRemaining(state) {
      state.guessesRemainingSlice = state.guessesRemainingSlice - 1
  },
  },
});

export const { resetGuessesRemaining, decreaseGuessesRemaining } = guessesRemainingSlice.actions;

export default guessesRemainingSlice.reducer;