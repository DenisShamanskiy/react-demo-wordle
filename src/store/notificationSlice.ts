import { createSlice } from '@reduxjs/toolkit'

type NotificationState = {
  visible: boolean
  message: string
}

const initialState: NotificationState = {
  visible: false,
  message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.visible = true
      state.message = action.payload.message
    },
    hideNotification(state) {
      state.visible = false
      state.message = ''
    },
  },
})

export const { showNotification, hideNotification } = notificationSlice.actions

export default notificationSlice.reducer
