import { createSlice } from '@reduxjs/toolkit'
import { wordsApi } from 'redux/api/wordsApi'
import { gameState } from 'types/store'
import { board, keyBoard } from 'utils/constants'

const initialState: gameState = {
  board: board,
  currentGuess: [],
  currentRowIndex: 0,
  gameStatus: 'IN_GAME',
  keyBoard: keyBoard,
  nextLetter: 0,
  word: {
    words: [''],
    currentWord: '',
    previousWord: '',
  },
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    getLocalGameData(state) {
      const localData = JSON.parse(localStorage['game'])
      state.board = localData.board
      state.currentGuess = localData.currentGuess
      state.currentRowIndex = localData.currentRowIndex
      state.gameStatus = localData.gameStatus
      state.keyBoard = localData.keyBoard
      state.nextLetter = localData.nextLetter
      state.word = localData.word
    },
    initialGame(state) {
      state.word.currentWord =
        state.word.words[Math.floor(Math.random() * state.word.words.length)]!
      localStorage.setItem('game', JSON.stringify(state))
    },
    setStatusGame(state, action) {
      state.gameStatus = action.payload
      localStorage.setItem('game', JSON.stringify(state))
    },
    setRelultGame(state, action) {
      if (action.payload === 'WIN') {
        state.gameStatus = action.payload
        state.board = state.board.map((row, index) =>
          index === state.currentRowIndex
            ? row.map((letter) => {
                return { value: letter.value, color: 'letter-green' }
              })
            : row,
        )
      } else if (action.payload === 'FAIL') {
        state.gameStatus = action.payload
      } else {
        state.gameStatus = action.payload
      }
      localStorage.setItem('game', JSON.stringify(state))
    },
    restartGame(state) {
      state.board = board
      state.currentGuess = []
      state.currentRowIndex = 0
      state.gameStatus = 'IN_GAME'
      state.keyBoard = keyBoard
      state.nextLetter = 0
      state.word.previousWord = state.word.currentWord
      state.word.currentWord =
        state.word.words[Math.floor(Math.random() * state.word.words.length)]!
      localStorage.setItem('game', JSON.stringify(state))
    },
    addLetterBoard(state, actions) {
      state.board = state.board.map((row, index) =>
        index === state.currentRowIndex
          ? row.map((letter, index) => {
              if (index === state.nextLetter) {
                return {
                  value: actions.payload,
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      state.currentGuess.push(actions.payload)
      state.nextLetter = state.nextLetter + 1
      localStorage.setItem('game', JSON.stringify(state))
    },
    removeLetterBoard(state) {
      state.board = state.board.map((row, index) =>
        index === state.currentRowIndex
          ? row.map((letter, index) => {
              if (index === state.nextLetter - 1) {
                return {
                  value: '',
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      state.currentGuess.pop()
      state.nextLetter = state.nextLetter - 1
      localStorage.setItem('game', JSON.stringify(state))
    },
    nextStep(state, action) {
      state.board = state.board.map((row, index) =>
        index === state.currentRowIndex
          ? row.map(function (letter, index) {
              return action.payload[index] === -1
                ? { value: letter.value, color: 'letter-grey' }
                : state.currentGuess[index] === state.word.currentWord[index]
                ? { value: letter.value, color: 'letter-green' }
                : { value: letter.value, color: 'letter-yellow' }
            })
          : row,
      )
      state.currentRowIndex = state.currentRowIndex + 1
      state.currentGuess = []
      state.nextLetter = 0
      localStorage.setItem('game', JSON.stringify(state))
    },
    colorKey(state, action) {
      state.keyBoard = state.keyBoard.map((row) =>
        row.map(function (key) {
          for (let i = 0; i < action.payload.length; i++) {
            if (
              action.payload[i]!.value === key.value &&
              key.color !== 'letter-green'
            )
              return action.payload[i]
          }
          return key
        }),
      )
      localStorage.setItem('game', JSON.stringify(state))
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      wordsApi.endpoints.getWords.matchFulfilled,
      (state, { payload }) => {
        state.word.words = payload
        localStorage.setItem('game', JSON.stringify(state))
      },
    )
  },
})

export const {
  getLocalGameData,
  initialGame,
  setStatusGame,
  restartGame,
  addLetterBoard,
  removeLetterBoard,
  setRelultGame,
  nextStep,
  colorKey,
} = gameSlice.actions

export default gameSlice.reducer
