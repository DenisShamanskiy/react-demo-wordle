import { createSlice } from '@reduxjs/toolkit'
import { wordsApi } from 'redux/api/wordsApi'
import { GameStatus, IGameState } from 'types/store'
import { board, keyBoard } from 'utils/constants'

const initialState: IGameState = {
  board: board,
  currentGuess: '',
  currentRowIndex: 0,
  gameStatus: GameStatus.inGame,
  keyBoard: keyBoard,
  nextLetter: 0,
  words: [''],
  currentWord: '',
  previousWord: '',
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    getLocalGameData(state) {
      const {
        board,
        currentGuess,
        currentRowIndex,
        gameStatus,
        keyBoard,
        nextLetter,
        words,
        currentWord,
        previousWord,
      } = JSON.parse(localStorage['game']) || {}
      state.board = board ?? state.board
      state.currentGuess = currentGuess ?? state.currentGuess
      state.currentRowIndex = currentRowIndex ?? state.currentRowIndex
      state.gameStatus = gameStatus ?? state.gameStatus
      state.keyBoard = keyBoard ?? state.keyBoard
      state.nextLetter = nextLetter ?? state.nextLetter
      state.words = words ?? state.words
      state.currentWord = currentWord ?? state.currentWord
      state.previousWord = previousWord ?? state.previousWord
    },
    initialGame(state, actions) {
      state.currentWord = actions.payload
      localStorage.setItem('game', JSON.stringify(state))
    },
    setRelultGame(state, action) {
      const { payload } = action
      state.gameStatus = payload
      if (payload === GameStatus.win) {
        state.board = state.board.map((row, index) =>
          index === state.currentRowIndex
            ? row.map((item) => ({
                letter: item.letter,
                color: 'green',
              }))
            : row,
        )
      }
      localStorage.setItem('game', JSON.stringify(state))
    },
    restartGame(state, actions) {
      const { previousWord, currentWord } = actions.payload
      state.board = board
      state.currentGuess = ''
      state.currentRowIndex = 0
      state.gameStatus = GameStatus.inGame
      state.keyBoard = keyBoard
      state.nextLetter = 0
      state.previousWord = previousWord
      state.currentWord = currentWord
      localStorage.setItem('game', JSON.stringify(state))
    },
    addLetterBoard(state, actions) {
      state.board = state.board.map((row, index) =>
        index === state.currentRowIndex
          ? row.map((letter, index) => {
              if (index === state.nextLetter) {
                return {
                  letter: actions.payload,
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      state.currentGuess = state.currentGuess + actions.payload
      state.nextLetter = state.nextLetter + 1
    },
    removeLetterBoard(state) {
      state.board = state.board.map((row, index) =>
        index === state.currentRowIndex
          ? row.map((item, index) => {
              if (index === state.nextLetter - 1) {
                return {
                  letter: '',
                  color: item.color,
                }
              }
              return item
            })
          : row,
      )
      state.nextLetter -= 1
      state.currentGuess = state.currentGuess.slice(0, -1)
    },
    advanceToNextRow(state, action) {
      state.board = state.board.map((row, rowIndex) =>
        rowIndex === state.currentRowIndex
          ? row.map((item, letterIndex) => {
              const guessLetter = state.currentGuess[letterIndex]
              const decryptLetter = action.payload.decryptWord[letterIndex]
              const indexColor = action.payload.indexColorArray[letterIndex]

              if (indexColor === -1) {
                return { letter: item.letter, color: 'grey' }
              } else if (guessLetter === decryptLetter) {
                return { letter: item.letter, color: 'green' }
              } else {
                return { letter: item.letter, color: 'yellow' }
              }
            })
          : row,
      )
      state.currentRowIndex += 1
      state.currentGuess = ''
      state.nextLetter = 0
      localStorage.setItem('game', JSON.stringify(state))
    },
    colorKey(state, action) {
      state.keyBoard = state.keyBoard.map((row) =>
        row.map((key) => {
          const matchingValue = action.payload.find(
            (item: { value: string }) =>
              item.value === key.value && key.color !== 'letter-green',
          )
          if (matchingValue) {
            return {
              value: matchingValue.value,
              color: matchingValue.color,
            }
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
        state.words = payload
      },
    )
  },
})

export const {
  getLocalGameData,
  initialGame,
  restartGame,
  addLetterBoard,
  removeLetterBoard,
  setRelultGame,
  advanceToNextRow,
  colorKey,
} = gameSlice.actions

export default gameSlice.reducer
