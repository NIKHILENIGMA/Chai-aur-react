import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let addMove = () => {
    if (count < 20) {
      setCount((count += 1));
    } else {
      setCount(20);
    }
  };

  let remove = () => {
    if (count > 0) {
      setCount((count -= 1));
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <h3> Counter : {count} </h3>

      <button onClick={addMove}> Add </button>
      <button onClick={remove}> Remove</button>
    </>
  );
}

export default App;
