import React, { useCallback, useState } from "react";
import PrintTable from "./PrintTable";

const UseCallBack = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const calculateTable = useCallback((value) => {
    const newVal = number + value
    return [newVal * 1, newVal * 2, newVal * 3, newVal * 4, newVal * 5];
  }, [number]);

  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    margin: "100px",
    padding: "100px",
  };

  return (
    <div style={cssStyle}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};

export default UseCallBack;
