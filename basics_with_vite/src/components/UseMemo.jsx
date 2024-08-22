import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

//   const calcuation = expensionCalculation(number);
    // here when the state changes react will re-render the component 
  // when re-render happens it calls the expensecal function again
  // which is not neccessary and the solution is we only run this fnc 
  // when the number is getting changed 
  // so we use useMemo hook for that 

  const calcuation = useMemo(()=>{
   return expensionCalculation(number)
  },[number])
  // basically it is similar to the useEffect but the difference is
  // we can't return a value and store it in an variable 
  // here in useMemo we can return and store in an variaboe
  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  // useMemo is used to improve the performance of our application'
  // we can stop running unwanted functions on re-rendering 



  return (
    <div style={cssStyle}>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.valueAsNumber)} />
      <h2>cal:{calcuation}</h2>
      <button onClick={()=>setDark(prev=>!prev)}>Click here</button>
    </div>
  );
};

function expensionCalculation(number) {
    console.log('loop started')
  for (let i = 0; i < 1000000; i++) {}
  return number;
}

export default UseMemo;
