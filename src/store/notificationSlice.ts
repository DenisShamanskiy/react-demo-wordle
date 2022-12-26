import { createSlice } from '@reduxjs/toolkit'

type NotificationState = {
  type: string
  open: boolean
  visible: boolean
  message: string
}

const initialState: NotificationState = {
  type: '',
  open: false,
  visible: false,
  message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.type = action.payload.type
      state.open = true
      state.visible = true
      state.message = action.payload.message
    },

    hideNotification(state) {
      state.open = false
    },
    deleteNotification(state) {
      state.type = ''
      state.visible = false
    },
  },
})

export const { showNotification, hideNotification, deleteNotification } =
  notificationSlice.actions

export default notificationSlice.reducer
