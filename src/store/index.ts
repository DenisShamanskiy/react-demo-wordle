import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todoSlice";
import guessesRemainingReducer from "./guessesRemainingSlice";
import nextLetterReducer from "./nextLetterSlice";
import currentGuessReducer from "./currentGuessSlice";
import rightGuessReducer from "./rightGuessSlice";
import boardSlice from './boardSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    board: boardSlice,
    guessesRemaining: guessesRemainingReducer,
    nextLetter: nextLetterReducer,
    currentGuess: currentGuessReducer,
    rightGuess: rightGuessReducer

  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store