import React, { useCallback, useState } from "react";

const PerformaceImprove = () => {

    const[debounceInput,setDebounceInput] = useState("")
    const[throtlleInput,setThrottleInput] = useState("");


  const ourDebounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };


  const ourThrottle = (fn,delay)=>{
    let timer;
    return (...args)=>{
        if(!timer){
            fn(...args)
            timer = setTimeout(()=>{
                timer = null
            },delay)
        }
    }
  }

  const deBounceChange = (e) => {
    console.log(e.target.value);
    setDebounceInput(e.target.value);
  };

  const throttleChange = (e) => {
    console.log(e.target.value);
    setThrottleInput(e.target.value);
  };

  const handleDebounce = useCallback(ourDebounce(deBounceChange, 500),[]);
  const handleThrottle = useCallback(ourThrottle(throttleChange,1000),[])

  return (
    <>
      <div>PerformaceImprove</div>
      <div>
        <input type="text" onChange={handleDebounce} />
        <input type="text" onChange={handleThrottle} />
      </div>
      <div>Debounce :{debounceInput}</div>
      <div>Throttle :{throtlleInput}</div>
    </>
  );
};

export default PerformaceImprove;
