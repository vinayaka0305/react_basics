import React, { useEffect, useState } from "react";

const StopWatch1 = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  },[running]);

  const resetTimer = ()=>{
    setTime(0);
    setRunning(false);
  }

  return (
    <>
      <h1>stop watch with seconds</h1>
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setRunning(true)}>start</button>
        <button onClick={() => setRunning(false)}>stop</button>
        <button onClick={resetTimer}>reset</button>
      </div>
    </>
  );
};

export default StopWatch1;
