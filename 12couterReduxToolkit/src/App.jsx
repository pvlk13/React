import "./App.css";
//import { increment, decrement } from "./store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { CounterControls } from "./components/counterControls";
import { CounterDisplay } from "./components/counterDisplay";

function App() {
  return (
    <>
      <h2>
        Redux Toolkit Implementation{" "}
        <span className="component-type">(I am the parent component)</span>{" "}
      </h2>
      <CounterControls />
      <CounterDisplay />
    </>
  );
}

export default App;
