
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [{
      id: 1,
      text: "Hello React",
    }],

  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload

      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
    },
    updateTodo: (state, action) => {
      //const { id, text } = action.payload
      state.todos.filter((todo) => {

        if (todo.id === action.payload) {
          return todo.text
        }
        else return todo
      })


    }

  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer
