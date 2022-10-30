import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  id: string
    username: string
    isLoggedIn: boolean
  
}

const initialState: UserState = {
    id: '',
    username: 'Гость',
    isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getLocalUserData(state) {
      const localData = JSON.parse(localStorage['user'])
      state.id = localData.id
    },
    
    // gameWon(state, action) {
    //   state.game.gameStatus = 'WIN'
    //   state.stats.win = state.stats.win + 1
    //   state.stats.bar = state.stats.bar.map(function (item, index) {
    //     return {
    //       name: item.name,
    //       count: index === state.game.currentRowIndex ? item.count + 1 : item.count,
    //       percent:
    //         index === state.game.currentRowIndex
    //           ? `${Math.round((100 / state.stats.win) * (item.count + 1))}%`
    //           : `${Math.round((100 / state.stats.win) * item.count)}%`,
    //     }
    //   })
    //   // state.game.board = state.game.board.map((row, index) =>
    //   //   index === state.game.currentRowIndex
    //   //     ? row.map(function (letter, index) {
    //   //         return action.payload[index] === -1
    //   //           ? { value: letter.value, color: 'letter-grey' }
    //   //           : state.game.currentGuess[index] === state.game.word.currentWord[index]
    //   //           ? { value: letter.value, color: 'letter-green' }
    //   //           : { value: letter.value, color: 'letter-yellow' }
    //   //       })
    //   //     : row,
    //   // )
    //   localStorage.setItem('persist', JSON.stringify(state))
    // },
    // gameLost(state) {
    //   state.game.gameStatus = 'FAIL'
    //   state.stats.loss = state.stats.loss + 1
    //   localStorage.setItem('persist', JSON.stringify(state))
    // },
    
    // colorKey(state, action) {
    //   console.log(action.payload)
    //   state.game.keyBoard = state.game.keyBoard.map((row) =>
    //     row.map(function (key) {
    //       for (let i = 0; i < action.payload.length; i++) {
    //         if (action.payload[i]!.value === key.value && key.color !== 'letter-green')
    //           return action.payload[i]
    //       }
    //       return key
    //     }),
    //   )
    //   localStorage.setItem('persist', JSON.stringify(state))
    // },
    setUser(state, action) {
        state.id = action.payload.id,
        state.username = action.payload.username,
        state.isLoggedIn = true,
      
      localStorage.setItem('game', JSON.stringify(state))
    },
    // setStats(state, action) {
    //   state.stats.win = action.payload.stats.win
    //   state.stats.loss = action.payload.stats.loss
    //   state.stats.surrender = action.payload.stats.surrender
    //   state.stats.bar = action.payload.stats.bar
    //   localStorage.setItem('persist', JSON.stringify(state))
    // },
    // logout(state) {
    //   state.user.isLoggedIn = false
    //   state.user.username = 'Гость'
    //   state.user.id = ''
    //   state.stats = {
    //     ...state.stats,
    //     win: 0,
    //     loss: 0,
    //     surrender: 0,
    //     bar: [
    //       {
    //         name: 1,
    //         percent: '0%',
    //         count: 0,
    //       },
    //       {
    //         name: 2,
    //         percent: '0%',
    //         count: 0,
    //       },
    //       {
    //         name: 3,
    //         percent: '0%',
    //         count: 0,
    //       },
    //       {
    //         name: 4,
    //         percent: '0%',
    //         count: 0,
    //       },
    //       {
    //         name: 5,
    //         percent: '0%',
    //         count: 0,
    //       },
    //       {
    //         name: 6,
    //         percent: '0%',
    //         count: 0,
    //       },
    //     ],
    //   }
    //   localStorage.setItem('persist', JSON.stringify(state))
    // },
  },
})

export const {
  getLocalUserData,
  setUser,
  // setStats,
  // logout,
} = userSlice.actions

export default userSlice.reducer
