import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './tasksSlice'
import { TodoAPI } from 'src/services/todo'

export default configureStore({
  reducer: {
    tasks: taskReducer,
    [TodoAPI.reducerPath]: TodoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoAPI.middleware),
})
