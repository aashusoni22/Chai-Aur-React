import { useState } from "react";

function App() {
  const [color, setColor] = useState("Crimson");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-6xl font-bold text-white">{color}</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg font-semibold bg-white px-5 py-3 rounded-full">
            <button
              onClick={() => setColor("Darkslategray")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "DarkslateGray" }}
            >
              Slate
            </button>
            <button
              onClick={() => setColor("Lightcoral")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "LightCoral" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("Mediumturquoise")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "mediumturquoise" }}
            >
              Aqua
            </button>
            <button
              onClick={() => setColor("Darkgoldenrod")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "DarkGoldenrod" }}
            >
              Gold
            </button>
            <button
              onClick={() => setColor("Olive")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("Mediumpurple")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "mediumpurple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("Rosybrown")}
              className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "rosybrown" }}
            >
              Rose
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
