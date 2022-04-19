import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // TODO: hook this up to appsync
    addTask: (state, action) => {
      const task = action.payload.task
      console.log('task:', task)
      const newTask = {
        id: new Date().toString(),
        title: task.title,
        description: task.description,
      }
      state.push(newTask)
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
