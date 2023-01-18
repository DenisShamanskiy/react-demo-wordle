import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'
import { setToken, logout } from 'redux/features/userSlice'
import { API_URL } from 'utils/constants'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    if (localStorage.getItem('user')) {
      headers.set(
        'authorization',
        `Bearer ${JSON.parse(localStorage['user']).token}`,
      )
    }
    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/refresh',
        credentials: 'include',
      },
      api,
      extraOptions,
    )
    if (refreshResult.data) {
      api.dispatch(setToken(refreshResult.data))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}
