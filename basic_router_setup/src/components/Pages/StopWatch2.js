import React, { useEffect, useState } from "react";

const StopWatch2 = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <h1>Stop watch with mili seconds</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={()=>setRunning(true)}>start</button>
        <button onClick={()=>setRunning(false)}>stop</button>
        <button onClick={()=>setTime(0)}>reset</button>
      </div>
    </>
  );
};

export default StopWatch2;
