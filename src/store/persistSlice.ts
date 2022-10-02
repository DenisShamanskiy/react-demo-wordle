import { createSlice } from '@reduxjs/toolkit'
import { WORDS } from 'utils/constants'

type BoardRow = {
  value: string | undefined
  color: string | undefined
}
type KeyBoardRow = {
  value: string
  color: string
}
type BarRow = {
  name: number
  percent: string
  count: number
}
type PersistState = {
  game: {
    board: BoardRow[][]
    keyBoard: KeyBoardRow[][]
    word: {
      currentWord: string
      previousWord: string
    }
    currentGuess: string[]
    gameStatus: string
    currentRowIndex: number
    nextLetter: number
  }
  settings: {
    hardMode: {
      active: boolean
      letters: string[]
    }
    darkMode: boolean
  }
  stats: {
    win: number
    loss: number
    surrender: number
    bar: BarRow[]
  }
}

const initialState: PersistState = {
  game: {
    board: [...new Array(6)].map(() => new Array(5).fill({ value: '', color: '' })),
    keyBoard: [
      [
        { value: 'й', color: '' },
        { value: 'ц', color: '' },
        { value: 'у', color: '' },
        { value: 'к', color: '' },
        { value: 'е', color: '' },
        { value: 'н', color: '' },
        { value: 'г', color: '' },
        { value: 'ш', color: '' },
        { value: 'щ', color: '' },
        { value: 'з', color: '' },
        { value: 'х', color: '' },
        { value: 'ъ', color: '' },
      ],
      [
        { value: 'ф', color: '' },
        { value: 'ы', color: '' },
        { value: 'в', color: '' },
        { value: 'а', color: '' },
        { value: 'п', color: '' },
        { value: 'р', color: '' },
        { value: 'о', color: '' },
        { value: 'л', color: '' },
        { value: 'д', color: '' },
        { value: 'ж', color: '' },
        { value: 'э', color: '' },
        { value: 'ё', color: '' },
      ],
      [
        { value: 'я', color: '' },
        { value: 'ч', color: '' },
        { value: 'с', color: '' },
        { value: 'м', color: '' },
        { value: 'и', color: '' },
        { value: 'т', color: '' },
        { value: 'ь', color: '' },
        { value: 'б', color: '' },
        { value: 'ю', color: '' },
      ],
    ],
    word: {
      currentWord: '',
      previousWord: '',
    },
    currentGuess: [],
    gameStatus: 'IN_PROGRESS',
    currentRowIndex: 0,
    nextLetter: 0,
  },
  settings: {
    hardMode: {
      active: false,
      letters: [],
    },
    darkMode: false,
  },
  stats: {
    win: 0,
    loss: 0,
    surrender: 0,
    bar: [
      {
        name: 1,
        percent: '0%',
        count: 0,
      },
      {
        name: 2,
        percent: '0%',
        count: 0,
      },
      {
        name: 3,
        percent: '0%',
        count: 0,
      },
      {
        name: 4,
        percent: '0%',
        count: 0,
      },
      {
        name: 5,
        percent: '0%',
        count: 0,
      },
      {
        name: 6,
        percent: '0%',
        count: 0,
      },
    ],
  },
}

const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    getLocalPersist(state) {
      const { game, settings, stats } = JSON.parse(localStorage['persist'])
      state.game = game
      state.settings = settings
      state.stats = stats
    },
    getFirstWord(state) {
      state.game.word = {
        previousWord: state.game.word.previousWord,
        currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    getNewWord(state) {
      state.game.word = {
        previousWord: state.game.word.currentWord,
        currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    setStatusGame(state, action) {
      state.game.gameStatus = action.payload
      localStorage.setItem('persist', JSON.stringify(state))
    },
    resetCurrentRowIndex(state) {
      state.game.currentRowIndex = 0
      localStorage.setItem('persist', JSON.stringify(state))
    },
    restartCurrentRowIndex(state) {
      state.game.currentRowIndex = 0
      localStorage.setItem('persist', JSON.stringify(state))
    },
    resetLetters(state) {
      state.game.nextLetter = 0
      localStorage.setItem('persist', JSON.stringify(state))
    },
    removeLetter(state, action) {
      state.game.board = state.game.board.map((row, index) =>
        index === action.payload.currentRowIndex
          ? row.map((letter, index) => {
              if (index === action.payload.nextLetter - 1) {
                return {
                  value: '',
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      localStorage.setItem('persist', JSON.stringify(state))
    },
    colorLetter(state, action) {
      console.log(action.payload)

      state.game.board = state.game.board.map((row, index) =>
        index === action.payload.currentRowIndex
          ? row.map(function (letter, index) {
              return action.payload.indexColorArray[index] === -1
                ? { value: letter.value, color: 'letter-grey' }
                : action.payload.currentGuess[index] === action.payload.currentWord[index]
                ? { value: letter.value, color: 'letter-green' }
                : { value: letter.value, color: 'letter-yellow' }
            })
          : row,
      )
      localStorage.setItem('persist', JSON.stringify(state))
    },
    resetBoard(state) {
      state.game.board = [...new Array(6)].map(() => new Array(5).fill({ value: '', color: '' }))
      localStorage.setItem('persist', JSON.stringify(state))
    },

    restartColorKey(state) {
      state.game.keyBoard = state.game.keyBoard.map((row) =>
        row.map(function (key) {
          return {
            value: key.value,
            color: '',
          }
        }),
      )
      localStorage.setItem('persist', JSON.stringify(state))
    },
    setSettings(state, action) {
      state.settings = {
        ...state.settings,
        hardMode: {
          active: action.payload.active,
          letters: action.payload.letters,
        },
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    setHardMode(state, actions) {
      state.settings = {
        ...state.settings,
        hardMode: {
          active: actions.payload.active,
          letters: [...new Set(state.settings.hardMode.letters.concat(actions.payload.letters))],
        },
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    resetHardMode(state) {
      state.settings.hardMode.letters = []
      localStorage.setItem('persist', JSON.stringify(state))
    },
    toggleHardMode(state) {
      state.settings = {
        ...state.settings,
        hardMode: {
          active: !state.settings.hardMode.active,
          letters: state.settings.hardMode.letters,
        },
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    toggleTheme(state) {
      state.settings = { ...state.settings, darkMode: !state.settings.darkMode }
      localStorage.setItem('persist', JSON.stringify(state))
    },
    resetStats(state) {
      state.stats = {
        ...state.stats,
        win: 0,
        loss: 0,
        surrender: 0,
        bar: [
          {
            name: 1,
            percent: '0%',
            count: 0,
          },
          {
            name: 2,
            percent: '0%',
            count: 0,
          },
          {
            name: 3,
            percent: '0%',
            count: 0,
          },
          {
            name: 4,
            percent: '0%',
            count: 0,
          },
          {
            name: 5,
            percent: '0%',
            count: 0,
          },
          {
            name: 6,
            percent: '0%',
            count: 0,
          },
        ],
      }
      localStorage.setItem('persist', JSON.stringify(state))
    },

    surrenderStats(state) {
      state.stats.surrender = state.stats.surrender + 1
      localStorage.setItem('persist', JSON.stringify(state))
    },

    //
    restartGame(state) {
      state.game = {
        ...state.game,
        gameStatus: 'IN_PROGRESS',
        word: {
          previousWord: state.game.word.currentWord,
          currentWord: WORDS[Math.floor(Math.random() * WORDS.length)]!,
        },
        board: [...new Array(6)].map(() => new Array(5).fill({ value: '', color: '' })),
        keyBoard: state.game.keyBoard.map((row) =>
          row.map(function (key) {
            return {
              value: key.value,
              color: '',
            }
          }),
        ),
        nextLetter: 0,
        currentGuess: [],
        currentRowIndex: 0,
      }
      state.settings.hardMode.letters = []
    },
    //
    addLetterBoard(state, actions) {
      state.game.board = state.game.board.map((row, index) =>
        index === state.game.currentRowIndex
          ? row.map((letter, index) => {
              if (index === state.game.nextLetter) {
                return {
                  value: actions.payload,
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      state.game.currentGuess.push(actions.payload)
      state.game.nextLetter = state.game.nextLetter + 1
      localStorage.setItem('persist', JSON.stringify(state))
    },
    removeLetterBoard(state) {
      state.game.board = state.game.board.map((row, index) =>
        index === state.game.currentRowIndex
          ? row.map((letter, index) => {
              if (index === state.game.nextLetter - 1) {
                return {
                  value: '',
                  color: letter.color,
                }
              }
              return letter
            })
          : row,
      )
      state.game.currentGuess.pop()
      state.game.nextLetter = state.game.nextLetter - 1
      localStorage.setItem('persist', JSON.stringify(state))
    },
    gameWon(state, action) {
      state.game.gameStatus = 'WIN'
      state.stats.win = state.stats.win + 1
      state.stats.bar = state.stats.bar.map(function (item, index) {
        return {
          name: item.name,
          count: index === state.game.currentRowIndex ? item.count + 1 : item.count,
          percent:
            index === state.game.currentRowIndex
              ? `${Math.round((100 / state.stats.win) * (item.count + 1))}%`
              : `${Math.round((100 / state.stats.win) * item.count)}%`,
        }
      })
      state.game.board = state.game.board.map((row, index) =>
        index === state.game.currentRowIndex
          ? row.map(function (letter, index) {
              return action.payload[index] === -1
                ? { value: letter.value, color: 'letter-grey' }
                : state.game.currentGuess[index] === state.game.word.currentWord[index]
                ? { value: letter.value, color: 'letter-green' }
                : { value: letter.value, color: 'letter-yellow' }
            })
          : row,
      )
      localStorage.setItem('persist', JSON.stringify(state))
    },
    gameLost(state) {
      state.game.gameStatus = 'DEFEAT'
      state.stats.loss = state.stats.loss + 1
      localStorage.setItem('persist', JSON.stringify(state))
    },
    nextStep(state, action) {
      state.game.board = state.game.board.map((row, index) =>
        index === state.game.currentRowIndex
          ? row.map(function (letter, index) {
              return action.payload[index] === -1
                ? { value: letter.value, color: 'letter-grey' }
                : state.game.currentGuess[index] === state.game.word.currentWord[index]
                ? { value: letter.value, color: 'letter-green' }
                : { value: letter.value, color: 'letter-yellow' }
            })
          : row,
      )
      state.game.currentRowIndex = state.game.currentRowIndex + 1
      state.game.currentGuess = []
      state.game.nextLetter = 0
      localStorage.setItem('persist', JSON.stringify(state))
    },
    colorKey(state, action) {
      console.log(action.payload)
      state.game.keyBoard = state.game.keyBoard.map((row) =>
        row.map(function (key) {
          for (let i = 0; i < action.payload.length; i++) {
            if (action.payload[i]!.value === key.value && key.color !== 'letter-green')
              return action.payload[i]
          }
          return key
        }),
      )
      localStorage.setItem('persist', JSON.stringify(state))
    },
  },
})

export const {
  getLocalPersist,
  getFirstWord,
  // resetCurrentGuess,
  setStatusGame,
  resetCurrentRowIndex,
  // increaseCurrentRowIndex,
  restartCurrentRowIndex,
  resetLetters,
  removeLetter,
  colorLetter,
  colorKey,
  resetHardMode,
  setHardMode,
  toggleHardMode,
  toggleTheme,
  setSettings,
  resetStats,
  surrenderStats,
  restartGame,
  addLetterBoard,
  removeLetterBoard,
  gameWon,
  gameLost,
  nextStep,
} = persistSlice.actions

export default persistSlice.reducer
