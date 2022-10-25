import { createSlice } from '@reduxjs/toolkit'

type ModalState = {
  open: boolean
  window: string
  title?: string
  description?: string[]
}

const initialState: ModalState = {
  open: false,
  window: '',
  title: '',
  description: [],
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.open = true
      state.window = action.payload.window
      state.title = action.payload.title
      // state.description = action.payload.description
    },
    closeModal(state) {
      state.open = false
      // state.window = action.payload.window
      // state.title = action.payload.title
      // state.description = action.payload.description
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
