import React from "react";
import { updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function EditTodo({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const dispatch = useDispatch();
  //const todosList = useSelector((state) => state.todos);

  const editTodo = () => {
    dispatch(updateTodo({ ...todo, text: todoMsg }));
    setIsTodoEditable(true);
    setTodoMsg(todoMsg);
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className="shadow appearance-none bg-gray-200 focus:shadow-outline border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline-block margin-right: -m-4;"
      />

      <span>
        <button
          onClick={editTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded margin-left:100px;"
        >
          Update
        </button>
      </span>
    </div>
  );
}

export default EditTodo;
