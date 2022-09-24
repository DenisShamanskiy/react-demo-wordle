import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  darkThemeSlice: boolean;
}

const initialState: ThemeState = {
    darkThemeSlice: false,
}

const themeSlice = createSlice({
  name: "guessesRemaining",
  initialState,
  reducers: {
    localToggleTheme(state) {
      state.darkThemeSlice = localStorage.getItem("theme") === "false" ? false : true
    },
    toggleTheme(state) {
      state.darkThemeSlice = !state.darkThemeSlice
      localStorage.setItem('theme', state.darkThemeSlice.toString());
    },
    // decreaseGuessesRemaining(state) {
    //   state.guessesRemainingSlice = state.guessesRemainingSlice - 1
    //   localStorage.setItem('guessesRemaining', state.guessesRemainingSlice.toString());
    // },
    // restartGuessesRemaining(state) {
    //   state.guessesRemainingSlice = 6
    //   localStorage.setItem('guessesRemaining', state.guessesRemainingSlice.toString());
    // },
  },
});

export const { localToggleTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;