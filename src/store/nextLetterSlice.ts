import { createSlice } from "@reduxjs/toolkit";

type NextLetterState = {
    nextLetterSlice: number;
}

const initialState: NextLetterState = {
    nextLetterSlice: 0,
}

const nextLetterSlice = createSlice({
  name: "nextLetter",
  initialState,
  reducers: {
    localLetters(state) {
        state.nextLetterSlice = Number(localStorage.getItem("nextLetter"))
    },
    increaseLetters(state) {
        state.nextLetterSlice = state.nextLetterSlice + 1
        localStorage.setItem('nextLetter', state.nextLetterSlice.toString());
    },
    decreaseLetters(state) {
        state.nextLetterSlice = state.nextLetterSlice - 1
        localStorage.setItem('nextLetter', state.nextLetterSlice.toString());
    },
    resetLetters(state) {
        state.nextLetterSlice = 0
        localStorage.setItem('nextLetter', state.nextLetterSlice.toString());
    },
  },
});

export const { localLetters, increaseLetters, decreaseLetters, resetLetters } = nextLetterSlice.actions;

export default nextLetterSlice.reducer;