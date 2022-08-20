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
    increaseLetters(state) {
        state.nextLetterSlice = state.nextLetterSlice + 1
    },
    decreaseLetters(state) {
        state.nextLetterSlice = state.nextLetterSlice - 1
    },
    resetLetters(state) {
        state.nextLetterSlice = 0
    },
  },
});

export const { increaseLetters, decreaseLetters, resetLetters } = nextLetterSlice.actions;

export default nextLetterSlice.reducer;