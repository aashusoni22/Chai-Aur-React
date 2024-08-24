import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
