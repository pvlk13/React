import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let count = 15;

function App() {
  let [counter, setCounter] = useState(count);
  const addValue = () => {
    //console.log("counter value: " + counter);
    if (counter < 20) {
      return setCounter(counter + 1);
    } else {
      return setCounter(counter);
    }
    /* setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);*/
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>counter {counter}</h1>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
