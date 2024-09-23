import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice.js";
import { decrement } from "../store/counterSlice.js";
export const CounterControls = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Counter Controls
        <span className="component-type">(I am the child 2)</span>
      </h2>
      <button onClick={() => dispatch(increment(1))}>Increment</button>

      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};
