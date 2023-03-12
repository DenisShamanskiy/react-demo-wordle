import { createSlice } from '@reduxjs/toolkit'

interface IModalState {
  isOpen: boolean
  component: 'Confirm' | 'GameResult' | null
  props: {
    heading: string
    type?: 'new-game' | 'leave'
    description?: string
    result?: 'win' | 'leave' | 'fail'
  }
}

const initialState: IModalState = {
  isOpen: false,
  component: null,
  props: {
    heading: '',
    type: undefined,
    description: '',
    result: undefined,
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
    },

    closeModal(state) {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
