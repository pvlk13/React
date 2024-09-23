import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div>
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
