import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithReauth'
import { NonEmptyArr, WordsResponse } from './types'

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  tagTypes: ['Words'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getWords: build.query<NonEmptyArr<string>, void>({
      query: () => 'words',
      providesTags: (result) =>
        result
          ? [
              ...result.map((id) => ({ type: 'Words' as const, id })),
              { type: 'Words', id: 'LIST' },
            ]
          : [{ type: 'Words', id: 'LIST' }],
    }),
    addWord: build.mutation<WordsResponse, string>({
      query: (word) => ({
        url: 'words/add',
        method: 'PATCH',
        body: { word: word },
      }),
      invalidatesTags: [{ type: 'Words', id: 'LIST' }],
    }),
    deleteWord: build.mutation<WordsResponse, string>({
      query: (word) => ({
        url: 'words/delete',
        method: 'PATCH',
        body: { word: word },
      }),
      invalidatesTags: [{ type: 'Words', id: 'LIST' }],
    }),
  }),
})

export const { useGetWordsQuery, useAddWordMutation, useDeleteWordMutation } =
  wordsApi
