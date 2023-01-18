import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithReauth'
import { User } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUsers: build.query<string[], void>({
      query: () => 'users',
    }),
    updateProfile: build.mutation<
      User,
      { id: User['id']; username: User['username']; email: User['email'] }
    >({
      query(data) {
        return {
          url: 'profile/edit',
          method: 'PUT',
          body: data,
        }
      },
    }),
    updateStatistics: build.mutation<
      User['statistics'],
      { id: User['id']; statistics: User['statistics'] }
    >({
      query(data) {
        return {
          url: 'user/statistics',
          method: 'PUT',
          body: data,
        }
      },
    }),
  }),
})

export const {
  useGetUsersQuery,
  useUpdateProfileMutation,
  useUpdateStatisticsMutation,
} = userApi
