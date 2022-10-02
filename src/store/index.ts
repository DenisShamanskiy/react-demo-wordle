import { configureStore } from '@reduxjs/toolkit'
import alertSliceReducer from './alertSlice'
import modalReducer from './modalSlice'
import persistReducer from './persistSlice'

const store = configureStore({
  reducer: {
    alert: alertSliceReducer,
    modal: modalReducer,
    persist: persistReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
