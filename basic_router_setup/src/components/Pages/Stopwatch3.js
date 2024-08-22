import React, { useRef, useState } from "react";

const Stopwatch3 = () => {
  const startTime = useRef(0);
  const interval = useRef(0);
  const [currTime, setCurrTime] = useState(0);
  const [laps, setLaps] = useState([]);

  let secondsLapsed;

  const startStopWatch = () => {
    startTime.current = Date.now();
    interval.current = setInterval(() => {
      setCurrTime(Date.now());
    }, 10);
  };

  secondsLapsed = (currTime - startTime.current) / 1000;

  const stopStopWatch = () => {
    clearInterval(interval.current);
    interval.current = 0;
  };

  const trackTheLap = () => {
    setLaps([...laps, secondsLapsed]);
  };

  // console.log(laps)

  const resetTheStopWatch = () => {
    setCurrTime(0);
    secondsLapsed = 0;
    clearInterval(interval.current);
    setLaps([]);
    startTime.current = 0;
  };
  return (
    <>
      <h1>stop watch with time lap</h1>
      <section>
        <h2>{secondsLapsed}</h2>
        <section>
          <button onClick={startStopWatch}>start</button>
          <button onClick={stopStopWatch}>stop</button>
          <button onClick={trackTheLap}>laps</button>
          <button onClick={resetTheStopWatch}>reset</button>
        </section>
      </section>
      {laps?.length ? (
        <section>
          <h2>laps</h2>
          <section>
            {laps.map((lap, index) => (
              <p key={index}>{lap}</p>
            ))}
          </section>
        </section>
      ) : null}
    </>
  );
};

export default Stopwatch3;
