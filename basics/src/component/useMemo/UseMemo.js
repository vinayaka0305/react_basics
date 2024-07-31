import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const memoCalculation= useMemo(()=>{
    expensiveFunction(number)
  },[number]) // it will take two arguments 1.cb fnc 2.dependencies array
  // when any variable from this dependency is changed only then and then cb fnc
  // will run

//   const calculation = expensiveFunction(number);
  // it will re-render every time when we toggle
  // we can modify this fnc to run only when number is changed (useMemo);
//   console.log(calculation);




  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={cssStyle}>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <h2>calculation:{memoCalculation}</h2>
      <button onClick={()=>setDark(!dark)}>toggle</button>
    </div>
  );
};
// when we click on toggle button react is re-rendering the component 
function expensiveFunction(number){
    console.log("loop started")
    for(let i=0;i<10000;i++){}
    return number
}

export default UseMemo;
