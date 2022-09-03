import { createSlice } from "@reduxjs/toolkit";

type KeyBoardRow = {
    value: string;
    color: string
}

type KeyBoardState = {
    keyBoard: KeyBoardRow[][];
}

const initialState: KeyBoardState = {
    keyBoard: [
      [
        { value: "й", color: "" },
        { value: "ц", color: "" },
        { value: "у", color: "" },
        { value: "к", color: "" },
        { value: "е", color: "" },
        { value: "н", color: "" },
        { value: "г", color: "" },
        { value: "ш", color: "" },
        { value: "щ", color: "" },
        { value: "з", color: "" },
        { value: "х", color: "" },
        { value: "ъ", color: "" },
      ],
      [
        { value: "ф", color: "" },
        { value: "ы", color: "" },
        { value: "в", color: "" },
        { value: "а", color: "" },
        { value: "п", color: "" },
        { value: "р", color: "" },
        { value: "о", color: "" },
        { value: "л", color: "" },
        { value: "д", color: "" },
        { value: "ж", color: "" },
        { value: "э", color: "" },
        { value: "ё", color: "" },
      ],
      [
        { value: "я", color: "" },
        { value: "ч", color: "" },
        { value: "с", color: "" },
        { value: "м", color: "" },
        { value: "и", color: "" },
        { value: "т", color: "" },
        { value: "ь", color: "" },
        { value: "б", color: "" },
        { value: "ю", color: "" },
      ],
    ]
}

const keyBoardSlice = createSlice({
    name: "keyBoard",
    initialState,
    reducers: {
        colorKey(state, action) {
          state.keyBoard = state.keyBoard.map((row) => row.map(function(key) {
            for (let i = 0; i < action.payload.length; i++) {
              if(action.payload[i]!.value === key.value && key.color !== "letter-green")
                return action.payload[i]
              }  return key
            }))
        },
        restartColorKey(state) {
          state.keyBoard = state.keyBoard.map((row) => row.map(function(key) {
            return {
              value: key.value,
              color: "" }
          }))
        }
    }
})

export const { colorKey, restartColorKey } = keyBoardSlice.actions;

export default keyBoardSlice.reducer;
