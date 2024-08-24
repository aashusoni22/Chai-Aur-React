import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNumber) str += "1234567890";
    if (allowChar) str += "~!@#$%^&*()_{}*-";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowChar, allowNumber, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, allowNumber, allowChar, generatePassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-5 my-10 bg-[#1e1e1e] text-white">
        <h1 className="text-center font-bold text-4xl my-4 mb-7 tracking-wide">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-lg text-gray-800 rounded-l-lg"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-[#ff414e] hover:bg-[#ff5f5f] text-white font-semibold px-4 py-2 transition-all rounded-r-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label htmlFor="lengthSlider" className="font-semibold">
              Length: {length}
            </label>
            <input
              type="range"
              id="lengthSlider"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer w-full ml-4 accent-[#ff414e]"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={allowNumber}
              id="numberInput"
              onChange={() => setAllowNumber((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-[#ff414e] rounded focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor="numberInput"
              className="font-semibold cursor-pointer"
            >
              Include Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-2 mb-4">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={allowChar}
              onChange={() => setAllowChar((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-[#ff414e] rounded focus:ring-0 focus:outline-none"
            />
            <label
              htmlFor="characterInput"
              className="font-semibold cursor-pointer"
            >
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
