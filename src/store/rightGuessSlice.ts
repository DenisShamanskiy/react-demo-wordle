import { createSlice } from "@reduxjs/toolkit";
import { WORDS } from "../words"

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
        console.log(WORDS);
        
        state.rightGuessSlice = action.payload
    },
  },
});

export const { addRightGuess } = rightGuessSlice.actions;

export default rightGuessSlice.reducer;