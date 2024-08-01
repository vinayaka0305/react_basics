import React, { useState } from "react";
import PrintNum from "./PrintNum";

const Example = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState([]);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  function printNumber(number) {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <PrintNum printNumber= {printNumber}/>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Example;
