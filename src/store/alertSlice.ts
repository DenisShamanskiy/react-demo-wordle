import { createSlice } from '@reduxjs/toolkit'

type AlertState = {
  open: boolean
  message: string
}

const initialState: AlertState = {
  open: false,
  message: '',
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    handleAlert(state, action) {
      ;(state.open = action.payload.open), (state.message = action.payload.message)
    },
  },
})

export const { handleAlert } = alertSlice.actions

export default alertSlice.reducer
