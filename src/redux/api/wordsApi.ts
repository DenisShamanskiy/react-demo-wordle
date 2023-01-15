import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type WordsMutation = {
  status: number
  errors?: string[]
}

const API_URL = 'http://localhost:3002/api'

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  tagTypes: ['Words'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getWords: build.query<string[], void>({
      query: () => 'words',
      providesTags: (result) =>
        result
          ? [
              ...result.map((id) => ({ type: 'Words' as const, id })),
              { type: 'Words', id: 'LIST' },
            ]
          : [{ type: 'Words', id: 'LIST' }],
    }),
    addWord: build.mutation<WordsMutation, string>({
      query: (word) => ({
        url: 'words/add',
        method: 'PATCH',
        body: { word: word },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),

      invalidatesTags: [{ type: 'Words', id: 'LIST' }],
    }),
    deleteWord: build.mutation<WordsMutation, string>({
      query: (word) => ({
        url: 'words/delete',
        method: 'PATCH',
        body: { word: word },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: [{ type: 'Words', id: 'LIST' }],
    }),
  }),
})

export const { useGetWordsQuery, useAddWordMutation, useDeleteWordMutation } =
  wordsApi
