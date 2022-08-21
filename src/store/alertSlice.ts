import { createSlice } from "@reduxjs/toolkit";

type AlertState = {
    alertSlice: {
        open: boolean,
        message: string,
        style: string
    };
}

const initialState: AlertState = {
    alertSlice: {
        open: false,
        message: "",
        style: ""
    },
}

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
        state.alertSlice = {...state.alertSlice,
            open: action.payload.open,
            style: action.payload.style,
            message: action.payload.message}
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;