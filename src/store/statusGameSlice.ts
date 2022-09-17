import { createSlice } from "@reduxjs/toolkit";

type StatusGameState = {
    statusGameSlice: string;
}

const initialState: StatusGameState = {
    statusGameSlice: "inGame",
}

const statusGameSlice = createSlice({
  name: "statusGame",
  initialState,
  reducers: {
    localStatusGame(state) {
        state.statusGameSlice = localStorage.getItem("statusGame")!
    },
    setStatusGame(state, action) {
        state.statusGameSlice = action.payload
        localStorage.setItem('statusGame', state.statusGameSlice);
    },
    
  },
});

export const { localStatusGame, setStatusGame } = statusGameSlice.actions;

export default statusGameSlice.reducer;