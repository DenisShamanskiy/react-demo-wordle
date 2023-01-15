import { configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/es/storage'
import notificationSliceReducer from './features/notificationSlice'
import modalReducer from './features/modalSlice'
import userReducer from './features/userSlice'
import gameReducer from './features/gameSlice'
import settingsReducer from './features/settingsSlice'
import newGameReducer from './features/newGameSlice'
import loadingReducer from './features/loadingSlice'
import { wordsApi } from './api/wordsApi'

// const rootReducer = combineReducers({
//   notification: notificationSliceReducer,
//   modal: modalReducer,
//   user: userReducer,
//   game: gameReducer,
//   settings: settingsReducer,
//   newGame: newGameReducer,
//   loading: loadingReducer,
//   [wordsApi.reducerPath]: wordsApi.reducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: [wordsApi.reducerPath],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    notification: notificationSliceReducer,
    modal: modalReducer,
    user: userReducer,
    game: gameReducer,
    settings: settingsReducer,
    newGame: newGameReducer,
    loading: loadingReducer,
    [wordsApi.reducerPath]: wordsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(wordsApi.middleware),
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
