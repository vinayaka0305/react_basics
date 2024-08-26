import React, { useContext, useMemo, useState } from 'react'
import { ThemeContext } from '../components/contextApi/ThemeProvider'

const UseMemo = () => {

    const{cssStyle,toggle} = useContext(ThemeContext);

    const [number,setNumber] = useState(0)

   const calculation = useMemo(()=>{
        expensionCal(number)
    },[number])
    
    // const calculation = expensionCal(number)

  return (
    <div style={cssStyle}>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)}/>
        <h2>myCal:{calculation}</h2>
        <button onClick={toggle}>toggle</button>
    </div>
  )
}

function expensionCal(number){
    console.log('running');
    for(let i=0;i<10000;i++){}
    return number;
}

export default UseMemo