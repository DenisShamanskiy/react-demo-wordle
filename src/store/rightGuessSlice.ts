import { createSlice } from "@reduxjs/toolkit";
import { WORDS } from "../words";

type RightGuessState = {
  rightGuessSlice: string;
}

const initialState: RightGuessState = {
  rightGuessSlice: WORDS[Math.floor(Math.random() * WORDS.length)]!,
}

const rightGuessSlice = createSlice({
  name: "rightGuess",
  initialState,
  reducers: {
    addRightGuess(state, action) {
        state.rightGuessSlice = action.payload
    },
    restartRightGuess(state) {
      state.rightGuessSlice = WORDS[Math.floor(Math.random() * WORDS.length)]!
  },
  },
});

export const { addRightGuess, restartRightGuess } = rightGuessSlice.actions;

export default rightGuessSlice.reducer;