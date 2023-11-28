import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false); // Initially we dont need any ticks
  const [character, setCharacter] = useState(false); // Initially we dont need any ticks
  const [password, setPassword] = useState("");

  // useRef look
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    //First interface which have title and copy button
    <div className="w-full max-w-md m-auto shadow-md rounded-lg px-5 py-4 my-7 text-black bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <h1 className="text-4xl text-center text-yellow-300 my-4 ">
        Password Generator
      </h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          name=""
          value={password}
          className=" outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        {/* Copy Button */}
        <button
          className=" outline-none bg-violet-800 text-white hover:text-white hover:bg-pink-800 shadow-inherit px-3 py-3 shrink-0.5 "
          onClick={copyPasswordClipBoard}
        >
          Copy
        </button>
      </div>

      {/* Slider  */}
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-4">
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            className=" cursor-grabbing pr-2"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className=" text-white">Length: {length}</label>
        </div>

        {/* Number Checkbox */}
        <div className="flex items-center gap-x-4">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            className=" cursor-pointer "
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className=" text-white">
            Numbers
          </label>
        </div>

        {/* Special Character */}
        <div className="flex items-center gap-x-4">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput" className=" text-white">
            Character
          </label>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  //     <h1 className="text-white text-center my-3">Password generator</h1>
  //     <div className="flex shadow rounded-lg overflow-hidden mb-4">
  //       <input
  //         type="text"
  //         value={password}
  //         className="outline-none w-full py-1 px-3"
  //         placeholder="Password"
  //         readOnly
  //         // ref={passwordRef}
  //       />
  //       <button

  //         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
  //       >
  //         copy
  //       </button>
  //     </div>
  //     <div className="flex text-sm gap-x-2">
  //       <div className="flex items-center gap-x-1">
  //         <input
  //           type="range"
  //           min={6}
  //           max={100}
  //           value={length}
  //           className="cursor-pointer"
  //           onChange={(e) => {
  //             setLength(e.target.value);
  //           }}
  //         />
  //         <label>Length: {length}</label>
  //       </div>
  //       <div className="flex items-center gap-x-1">
  //         <input
  //           type="checkbox"
  //           defaultChecked={number}
  //           id="numberInput"
  //           onChange={() => {
  //             setNumber((prev) => !prev);
  //           }}
  //         />
  //         <label htmlFor="numberInput">Numbers</label>
  //       </div>
  //       <div className="flex items-center gap-x-1">
  //         <input
  //           type="checkbox"
  //           defaultChecked={character}
  //           id="characterInput"
  //           onChange={() => {
  //             setCharacter((prev) => !prev);
  //           }}
  //         />
  //         <label htmlFor="characterInput">Characters</label>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
