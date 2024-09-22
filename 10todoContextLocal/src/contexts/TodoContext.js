import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "todo",
      checked: false
    }
  ],
  addTodo: (title) => { },
  updateTodo: (id, title) => { },
  deleteTodo: (id) => { },
  toggleComplete: (id) => { }


})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;