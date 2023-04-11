import { createSlice } from '@reduxjs/toolkit'

export interface IModalState {
  isOpen: boolean
  component: 'Confirm' | 'GameResult' | null
  props: {
    heading: 'Новая игра?' | 'Сдаёшься?' | 'Удалить аккаунт?' | null
    description?: string | null
    result?: 'win' | 'leave' | 'fail'
  }
  error: {
    status?: number | null
    message?: string | null
  }
}

const initialState: IModalState = {
  isOpen: false,
  component: null,
  props: {
    heading: null,
    description: null,
    result: undefined,
  },
  error: {
    status: null,
    message: null,
  },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true
      state.component = action.payload.component
      state.props = action.payload.props
      state.error = action.payload.error
    },
    closeModal(state) {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
