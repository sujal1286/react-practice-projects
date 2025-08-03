import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("Copy");

  const passwordRef = useRef(null);

  const genPass = useCallback(() => {
    let pass = "";
    let str = "SUJALsujal";
    if (numberAllowed) str += "120806";
    if (charAllowed) str += "@#$%&*()_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText("Copy");
    }, 5000);
  }, [password]);

  useEffect(() => {
    genPass();
  }, [length, numberAllowed, charAllowed, genPass]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-60 text-orange-400 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-2 bg-white text-black"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0"
          >
            {btnText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={setNumberAllowed}
              id="numberAllowed"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberAllowed"> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={setCharAllowed}
              id="charAllowed"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
