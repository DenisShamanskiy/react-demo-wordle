import { createSlice } from "@reduxjs/toolkit";

type BoardRow = {
    id: string
    value: string;
    color: string
}

type BoardState = {
    board: BoardRow[][];
}

const initialState: BoardState = {
    board: [...new Array(6)].map(() => new Array(5).fill({ value: "", color: "" })),
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        addLetter(state, action) {
        state.board = state.board.map((row, index) =>
            index === 6 - action.payload.guessesRemaining
            ? row.map((letter, index) => {
                if (index === action.payload.nextLetter) {
                    return {
                    id: letter.id,
                    value: action.payload.pressedKey,
                    color: letter.color,
                    };
                }
                return letter;
                })
            : row
        );
        },
        removeLetter(state, action) {
            state.board = state.board.map((row, index) =>
            index === 6 - action.payload.guessesRemaining
                ? row.map((letter, index) => {
                    if (index === action.payload.nextLetter - 1) {
                    return {
                        id: letter.id,
                        value: "",
                        color: letter.color,
                    };
                    }
                    return letter;
                })
                : row
            );
        },
        colorLetter(state, action) {
            state.board = state.board.map((row, index) => index === 6 - action.payload.guessesRemaining ? row.map(function(letter, index) {
                return action.payload.indexColorArray[index] === -1
                ?
                { id: letter.id, value: letter.value, color: 'letter-grey' }
                :
                action.payload.currentGuess[index] === action.payload.rightGuess[index]
                ? 
                { id: letter.id, value: letter.value, color: 'letter-green' }
                :
                { id: letter.id, value: letter.value, color: 'letter-yellow' }
        })
            : row)
            
        }
  },
});

export const { addLetter, removeLetter, colorLetter } = boardSlice.actions;

export default boardSlice.reducer;
