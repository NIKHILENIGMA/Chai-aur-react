import { useState } from "react";


// import "./App.css";

function App() {
  const [color, setCount] = useState("Olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("green")}style={{backgroundColor: "green"}}>Green</button>
            
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("blue")}style={{backgroundColor: "Blue"}}>Blue</button>
            
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("indigo")}style={{backgroundColor: "Indigo"}}>Indigo</button>
            
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("Violet")}style={{backgroundColor: "Violet"}}>Violet</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("Yellowgreen")}style={{backgroundColor: "Yellowgreen"}}>Yellow-green</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("red")}style={{backgroundColor: "Red"}}>Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("purple")}style={{backgroundColor: "Purple"}}>Purple</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setCount("black")}style={{backgroundColor: "black"}}>black</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
