import { configureStore } from '@reduxjs/toolkit'
import guessesRemainingReducer from "./guessesRemainingSlice";
import nextLetterReducer from "./nextLetterSlice";
import currentGuessReducer from "./currentGuessSlice";
import rightGuessReducer from "./rightGuessSlice";
import boardReducer from './boardSlice';
import alertSliceReducer from './alertSlice';
import keyBoardReducer from './keyboardSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    guessesRemaining: guessesRemainingReducer,
    nextLetter: nextLetterReducer,
    currentGuess: currentGuessReducer,
    rightGuess: rightGuessReducer,
    alert: alertSliceReducer,
    keyBoard: keyBoardReducer,
    modal: modalReducer

  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store