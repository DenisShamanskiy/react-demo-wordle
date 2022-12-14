import { configureStore } from '@reduxjs/toolkit'
import notificationSliceReducer from './notificationSlice'
import modalReducer from './modalSlice'
import userReducer from './userSlice'
import gameReducer from './gameSlice'
import settingsReducer from './settingsSlice'
import newGameReducer from './newGameSlice'
import adminReducer from './adminSlice'

const store = configureStore({
  reducer: {
    notification: notificationSliceReducer,
    modal: modalReducer,
    user: userReducer,
    game: gameReducer,
    settings: settingsReducer,
    newGame: newGameReducer,
    admin: adminReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
