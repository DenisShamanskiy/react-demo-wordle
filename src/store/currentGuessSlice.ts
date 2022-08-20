import { createSlice } from "@reduxjs/toolkit";

type CurrentGuessState = {
  currentGuessSlice: string[];
}

const initialState: CurrentGuessState = {
  currentGuessSlice: [],
}

const currentGuessSlice = createSlice({
  name: "currentGuess",
  initialState,
  reducers: {
    addCurrentGuess(state, action) {
        state.currentGuessSlice.push(action.payload.pressedKey)
    },
    removeCurrentGuess(state) {
      state.currentGuessSlice.pop()
    },
    resetCurrentGuess(state) {
      state.currentGuessSlice = []
    },
  },
});

export const { addCurrentGuess, removeCurrentGuess, resetCurrentGuess } = currentGuessSlice.actions;

export default currentGuessSlice.reducer;