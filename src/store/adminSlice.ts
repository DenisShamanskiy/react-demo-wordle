import { createSlice } from '@reduxjs/toolkit'

type AdminState = {
  wordList: {
    id: string
    words: string[]
  }
}

const initialState: AdminState = {
  wordList: {
    id: '',
    words: [''],
  },
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setWordList(state, action) {
      state.wordList.id = action.payload.id
      state.wordList.words = action.payload.words
    },
  },
})

export const { setWordList } = adminSlice.actions

export default adminSlice.reducer
