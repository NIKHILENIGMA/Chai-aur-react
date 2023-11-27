import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "../components/Cards";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4 className="bg-blue-700 mb-4">Tailwind test</h4>
      <Cards username="Nikhil " btnText = "text profile"/>
      <Cards username="Mesh"/>
    </>
  );
}

export default App;
