import { createSlice } from '@reduxjs/toolkit'

type LoadingState = {
  value: boolean
}

const initialState: LoadingState = {
  value: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.value = action.payload
    },
  },
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer
