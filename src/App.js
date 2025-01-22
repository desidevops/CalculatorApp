import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // To store the current input value
  const [result, setResult] = useState(""); // To store the result

  // Handle button click
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle equal button click and calculate the result
  const handleEqualClick = () => {
    try {
      setResult(eval(input).toString()); // Evaluate the input string to get the result
      setInput("");
    } catch (error) {
      setResult("Error");
      setInput("");
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Handle delete button click (delete last character)
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="app">
      <h1 className="heading">Calculator App</h1>
      <h2 className="subheading">By Desi DevOps</h2>
      <div className="calculator">
        <div className="screen">
          <div className="input">{input || "0"}</div>
          <div className="result">{result || ""}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEqualClick}>=</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="extra-buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>Del</button>
        </div>
      </div>
    </div>
  );
}

export default App;
