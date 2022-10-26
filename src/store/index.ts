import { configureStore } from '@reduxjs/toolkit'
import notificationSliceReducer from './notificationSlice'
import modalReducer from './modalSlice'
import persistReducer from './persistSlice'

const store = configureStore({
  reducer: {
    notification: notificationSliceReducer,
    modal: modalReducer,
    persist: persistReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
