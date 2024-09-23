import { useSelector } from "react-redux";

export const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);
  console.log("value of count");
  console.log(count);
  return (
    <div>
      <h2>
        Counter Display{" "}
        <span className="component-type">(I am the child 1)</span>{" "}
      </h2>
      <p>
        <b>Counter value: {count}</b>
      </p>
    </div>
  );
};
