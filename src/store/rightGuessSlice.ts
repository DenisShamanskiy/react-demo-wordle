import { createSlice } from "@reduxjs/toolkit";
import { WORDS } from "../words";

type RightGuessState = {
  rightGuessSlice: {
    currentWord: string,
    previousWord: string
  };
}

const initialState: RightGuessState = {
  rightGuessSlice: {
    currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,
    previousWord: ""
  }
}

const rightGuessSlice = createSlice({
  name: "rightGuess",
  initialState,
  reducers: {
    restartRightGuess(state) {
      state.rightGuessSlice = {...state.rightGuessSlice,
        previousWord: state.rightGuessSlice.currentWord,
        currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,   
    }
  },
  },
});

export const { restartRightGuess } = rightGuessSlice.actions;

export default rightGuessSlice.reducer;