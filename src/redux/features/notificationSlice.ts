import { createSlice } from '@reduxjs/toolkit'
import { NotificationState } from 'types/store'

const initialState: NotificationState = {
  type: null,
  open: false,
  message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.type = action.payload.type
      state.open = true
      state.message = action.payload.message
    },

    hideNotification(state) {
      state.open = false
    },
  },
})

export const { showNotification, hideNotification } = notificationSlice.actions

export default notificationSlice.reducer
