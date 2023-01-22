import { configureStore } from '@reduxjs/toolkit'
import notificationSliceReducer from './features/notificationSlice'
import modalReducer from './features/modalSlice'
import userReducer from './features/userSlice'
import usersReducer from './features/usersSlice'
import gameReducer from './features/gameSlice'
import settingsReducer from './features/settingsSlice'
import newGameReducer from './features/newGameSlice'
import loadingReducer from './features/loadingSlice'
import { wordsApi } from './api/wordsApi'
import { authApi } from './api/authApi'
import { userApi } from './api/userApi'

export const store = configureStore({
  reducer: {
    notification: notificationSliceReducer,
    modal: modalReducer,
    user: userReducer,
    users: usersReducer,
    game: gameReducer,
    settings: settingsReducer,
    newGame: newGameReducer,
    loading: loadingReducer,
    [wordsApi.reducerPath]: wordsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([
      wordsApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
