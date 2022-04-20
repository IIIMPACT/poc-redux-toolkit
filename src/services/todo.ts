import { GraphQLResult } from '@aws-amplify/api-graphql'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from 'API'
import { API } from 'aws-amplify'
import { getTodo, listTodos } from 'src/graphql/queries'

export const TodoAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  reducerPath: 'todoAPI',
  endpoints: (builder) => ({
    listTodos: builder.query<Todo[], string>({
      queryFn: async () => {
        try {
          const response: GraphQLResult<any> = await API.graphql({
            query: listTodos,
          })
          const todos = response.data.listTodos.items.filter(
            ({ _deleted }: Todo) => !_deleted
          )
          return { data: todos }
        } catch (err) {
          const error = err as Error
          throw new Error(error.message)
        }
      },
    }),

    getTodo: builder.query<Todo, string>({
      // @ts-ignore
      queryFn: async (id) => {
        try {
          const response: GraphQLResult<any> = await API.graphql({
            query: getTodo,
            variables: { id },
          })

          return { data: response.data.getTodo }
        } catch (err) {
          const error = err as Error
          throw new Error(error.message)
        }
      },
    }),
  }),
})

export const { useListTodosQuery, useGetTodoQuery } = TodoAPI
