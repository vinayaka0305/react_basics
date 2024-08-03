import React, { useEffect, useState } from 'react'

const UECleanUpEx2 = () => {

  const [count,setCount]=  useState(0)

  useEffect(()=>{
    console.log('run useEffect',count)

    return ()=>{
        console.log('clean', count);
    }
  },[count])
  //first time run useEffect will run
  // again in render first clean up run with prev value
  // then the run useEffcet(call back) will run

  // it not required in every case 
  // when we need to stop the repeated side effect when the componet get unmounts
  

  return (
    <div>
        <h2>count-{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>increase</button>
    </div>
  )
}

export default UECleanUpEx2