import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number,setNumber] = useState(1);
    const[dark,setDark] = useState(false);

    // const expenseCalFn = myCal(number)
   const expenseCalFn= useMemo(()=>{
        return myCal(number)
    },[number])

    const cssStyle = {
        backgroundColor:dark?'#333':"#fff",
        color:dark?'#fff':"#333"
    }
  return (
    <div style={cssStyle}>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)} />
        <h2>My cal :{expenseCalFn}</h2>
        <button onClick={()=>setDark((prev)=>!prev)}>click here</button>
    </div>
  )
}

function myCal(number){
    console.log('loop started');
    for(let i=0;i<10000;i++){}
    return number
}

export default UseMemo