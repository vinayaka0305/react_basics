import React, { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

const UseCallBack = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useCallback is used to return a memoize functions

  // it's also useful for preventing function from
  // being re-created on re-rendering

  // here the printable component will re-render even if we toggle the theme
  // which is not needed
  // when state changes the re-rendering will happen
  // so we have to stop this unwanted function recreation
  // so we have use usecall back hook;

  const calculateTable = useCallback((value) => {
    const newNum = number + value;
    return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5];
  }, [number]);

  // useCall return a function and we can store in an variable

  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  //   const calculateTable = ()=>{
  //     return [number * 1,number * 2,number * 3,number * 4,number * 5]
  //   }

  return (
    <div style={cssStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDark((prev) => !prev)}>Click here</button>
    </div>
  );
};

export default UseCallBack;
