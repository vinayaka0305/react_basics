import React, { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../components/contextApi/ThemeProvider";
import PrintNum from "./PrintNum";

const UseCallback = () => {
  const { cssStyle, toggle } = useContext(ThemeContext);

  const [number, setNumber] = useState(1);

  // const printFn = ()=>{
  //     return[number*1,number*2,number*3,number*4,number*5]
  // }

  const printFn = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);

  return (
    <div style={cssStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <PrintNum printFn={printFn} />
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export default UseCallback;
