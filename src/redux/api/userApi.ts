import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithReauth'
import { User, WordsResponse } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['Users'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => 'users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUser: build.query<User, string>({
      query: (id) => ({ url: `users/${id}` }),
    }),
    deleteUser: build.mutation<WordsResponse, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
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
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateProfileMutation,
  useUpdateStatisticsMutation,
} = userApi
