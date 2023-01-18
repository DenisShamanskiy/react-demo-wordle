import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthResponse } from './types'
import { API_URL } from 'utils/constants'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, credentials: 'include' }),
  endpoints: (build) => ({
    checkAuth: build.query({
      queryFn: async () => {
        try {
          const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
            withCredentials: true,
          })
          return response
        } catch (e) {
          console.log(e.response?.data?.message)
          return { error: e.message }
        }
      },
    }),
    signup: build.mutation<AuthResponse, { email: string; password: string }>({
      query(data) {
        return {
          url: 'registration',
          method: 'POST',
          body: data,
        }
      },
    }),
    signin: build.mutation<AuthResponse, { email: string; password: string }>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        }
      },
    }),
    signout: build.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          method: 'POST',
        }
      },
    }),
  }),
})

export const {
  useSignupMutation,
  useSigninMutation,
  useSignoutMutation,
  useCheckAuthQuery,
} = authApi
