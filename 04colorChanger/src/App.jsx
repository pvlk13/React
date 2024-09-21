import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-1 py-3 rounded-lg bg-slate-600">
          <div
            className="flex flex-wrap justify-center rounded-lg
           px-3 py-1 gap-6"
          >
            <button
              className="outline-none px-2 rounded-full"
              value="yellow"
              style={{ backgroundColor: "yellow" }}
              onClick={(e) => setColor(e.target.value)}
            >
              Yellow
            </button>
            <button
              className="outline-none px-2 rounded-full"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-2 rounded-full"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="outline-none px-2 rounded-full"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="outline-none px-2 rounded-full"
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>
            <button
              className="outline-none px-2 rounded-full"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="outline-none px-2 rounded-full text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
