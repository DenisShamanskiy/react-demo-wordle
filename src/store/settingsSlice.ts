import { createSlice } from '@reduxjs/toolkit'

type SettingsState = {
  hardMode: {
    active: boolean
    letters: string[]
    words: string[]
  }
  darkMode: boolean
}

const initialState: SettingsState = {
  hardMode: {
    active: false,
    letters: [],
    words: [],
  },
  darkMode: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    getLocalSettingData(state) {
      const localData = JSON.parse(localStorage['settings'])
      state.hardMode.active = localData.hardMode.active
      state.hardMode.letters = localData.hardMode.letters
      state.hardMode.words = localData.hardMode.words
      state.darkMode = localData.darkMode
    },

    toggleHardMode(state) {
      state.hardMode.active = !state.hardMode.active
      localStorage.setItem('settings', JSON.stringify(state))
    },

    addDataHardMode(state, action) {
      state.hardMode.letters = [
        ...new Set(state.hardMode.letters.concat(action.payload.lettersHardMode)),
      ]
      state.hardMode.words = [
        ...new Set(state.hardMode.words.concat(action.payload.currentGuessStr)),
      ]
      localStorage.setItem('settings', JSON.stringify(state))
    },

    resetDataHardMode(state) {
      state.hardMode.letters = []
      state.hardMode.words = []
      localStorage.setItem('settings', JSON.stringify(state))
    },

    toggleTheme(state) {
      state.darkMode = !state.darkMode
      localStorage.setItem('settings', JSON.stringify(state))
    },
  },
})

export const {
  getLocalSettingData,
  toggleHardMode,
  addDataHardMode,
  resetDataHardMode,
  toggleTheme,
} = settingsSlice.actions

export default settingsSlice.reducer
