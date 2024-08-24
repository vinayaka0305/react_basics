import React, { useCallback, useState } from 'react';
import PrintNumber from './PrintNumber';


const UseCallBack = () => {
    const [number,setNumber] = useState(1);
    const[dark,setDark] = useState(false);

    // const printFn=()=>{
    //     return[number * 1,number * 2, number *3]
    // }
   const printFn =  useCallback(()=>{
     return[number * 1,number * 2, number *3]
    },[number])

    const cssStye = {
        backgroundColor:dark?"#333":"#fff",
        color:dark?"#fff":'#333'
    }
  return (
    <div style={cssStye}>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)}/>
        <PrintNumber printFn={printFn}/>
        <button onClick={()=>setDark((prev)=>!prev)}>click here</button>
    </div>
  )
}

export default UseCallBack