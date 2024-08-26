import React, { useEffect, useState } from "react";

const StopWatch1 = () => {
  const [time, setTime] = useState(0);
  const[runnig,setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if(runnig){
       timer = setInterval(()=>{
            setTime((prev)=>prev + 10)
        },10)
    }else if(!runnig){
        clearInterval(timer)
    }
    return()=>{
        clearInterval(timer)
    }
  },[runnig]);

  const reset = ()=>{
    setRunning(false)
    setTime(0)
  }
  return (
    <>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={()=>setRunning(true)}>start</button>
        <button onClick={()=>setRunning(false)}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default StopWatch1;
