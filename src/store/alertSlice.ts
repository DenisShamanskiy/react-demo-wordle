import { createSlice } from '@reduxjs/toolkit'

type AlertState = {
  alertSlice: {
    open: boolean
    message: string
    color: string
  }
}

const initialState: AlertState = {
  alertSlice: {
    open: true,
    message: '',
    color: '',
  },
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alertSlice = {
        ...state.alertSlice,
        open: action.payload.open,
        color: action.payload.color,
        message: action.payload.message,
      }
    },
  },
})

export const { setAlert } = alertSlice.actions

export default alertSlice.reducer
