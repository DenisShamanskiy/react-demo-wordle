import { createSlice } from "@reduxjs/toolkit";

export type BoardRow = {
    value: string | undefined
    color: string | undefined
}

export type BoardState = {
    board: BoardRow[][];
}

const initialState: BoardState = {
    board: [...new Array(6)].map(() => new Array(5).fill({ value: "", color: "" })),
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        localBoard(state) {
            state.board = JSON.parse(localStorage["board"])
        },
        addLetter(state, action) {
            state.board = state.board.map((row, index) =>
                index === 6 - action.payload.guessesRemaining
                ? row.map((letter, index) => {
                    if (index === action.payload.nextLetter) {
                        return {
                        value: action.payload.pressedKey,
                        color: letter.color,
                        };
                    }
                    return letter;
                    })
                : row
            );
        localStorage.setItem("board", JSON.stringify(state.board))
        },
        removeLetter(state, action) {
            state.board = state.board.map((row, index) =>
                index === 6 - action.payload.guessesRemaining
                    ? row.map((letter, index) => {
                        if (index === action.payload.nextLetter - 1) {
                        return {
                            value: "",
                            color: letter.color,
                        };
                        }
                        return letter;
                    })
                    : row
                );
        localStorage.setItem("board", JSON.stringify(state.board))
        },
        colorLetter(state, action) {
            state.board = state.board.map((row, index) => index === 6 - action.payload.guessesRemaining ? row.map(function(letter, index) {
                return action.payload.indexColorArray[index] === -1
                ?
                { value: letter.value, color: 'letter-grey' }
                :
                action.payload.currentGuess[index] === action.payload.currentWord[index]
                ? 
                { value: letter.value, color: 'letter-green' }
                :
                { value: letter.value, color: 'letter-yellow' }
        })
            : row);

        localStorage.setItem("board", JSON.stringify(state.board))
            
        },
        resetBoard(state) {
            state.board = [...new Array(6)].map(() => new Array(5).fill({ value: "", color: "" }))
            localStorage.setItem("board", JSON.stringify(state.board))
        },
  },
});

export const { localBoard, addLetter, removeLetter, colorLetter, resetBoard } = boardSlice.actions;

export default boardSlice.reducer;
