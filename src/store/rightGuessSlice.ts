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
    currentWord: "",
    previousWord: ""
  }
}

const rightGuessSlice = createSlice({
  name: "rightGuess",
  initialState,
  reducers: {
    startRightGuess(state) {
      state.rightGuessSlice = {...state.rightGuessSlice,
        previousWord: state.rightGuessSlice.previousWord,
        currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,   
      }
      localStorage.setItem('word', state.rightGuessSlice.currentWord);
    },
    localRightGuess(state) {
      state.rightGuessSlice = {...state.rightGuessSlice,
        previousWord: state.rightGuessSlice.previousWord,
        currentWord: localStorage.getItem('word')!
      }
    },
    restartRightGuess(state) {
      state.rightGuessSlice = {...state.rightGuessSlice,
        previousWord: state.rightGuessSlice.currentWord,
        currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,   
      }
      localStorage.setItem('word', state.rightGuessSlice.currentWord);
    },
  },
});

export const { startRightGuess, localRightGuess, restartRightGuess } = rightGuessSlice.actions;

export default rightGuessSlice.reducer;