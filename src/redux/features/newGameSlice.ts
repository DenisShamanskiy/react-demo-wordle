import { createSlice } from '@reduxjs/toolkit'

type NewGameState = {
  show: boolean
  visible: boolean
}

const initialState: NewGameState = {
  show: false,
  visible: false,
}

const newGameSlice = createSlice({
  name: 'newGame',
  initialState,
  reducers: {
    showNewGame(state) {
      state.show = true
      state.visible = true
    },
    hideNewGame(state) {
      state.show = false
    },
    deleteNewGame(state) {
      state.visible = false
    },
  },
})

export const { showNewGame, hideNewGame, deleteNewGame } = newGameSlice.actions

export default newGameSlice.reducer
