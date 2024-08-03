import React, { useState,useEffect } from "react";

const UseEffect = () => {
    
  const [count, setCount] = useState(0);
  const[otherCnt,setOtherCnt] = useState(5);


    // useEffect(()=>{
    //     document.title = `${count} new messages`
    // })
    // without dependencies (whenever this component render use-effect will run)
    // it run on every single change in component;

    // useEffect(()=>{
    //     document.title = `${count} new messages`
    // },[])
    // use-effect will run only one time when the component get render first time
    // after it will never run

    useEffect(()=>{
        document.title = `${otherCnt} other new messages`
    },[otherCnt])
    // here we passed othercnt variable in dependency array
    // so use-effect only runs when this state variable values will change
    // by using ,,, we can pass more variables

  return (
    <div>
      <h2>Count:{count} new messages</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
      <h2>OtherCount:{otherCnt} other new messages</h2>
      <button onClick={() => setOtherCnt((prev) => prev + 1)}>increase</button>
    </div>
  );
};

export default UseEffect;
