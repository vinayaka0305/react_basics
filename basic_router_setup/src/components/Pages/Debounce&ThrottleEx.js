import React, { useCallback, useMemo, useState } from "react";


const ourDebounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};


const ourThrottle = (fn, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const TodoList2 = () => {
  const [debounceInput, setDebounceInput] = useState("");
  const [throtlleInput, setThrottleInput] = useState("");

  const debounceHandleChange = (e) => {
    console.log(e.target.value);
    setDebounceInput(e.target.value)
  };
  const throttleHandleChange = (e) => {
    console.log(e.target.value);
    setThrottleInput(e.target.value)
  };

  const debounceChange =useCallback(ourDebounce(debounceHandleChange, 300),[]);
  const throttleChange =useCallback(ourThrottle(throttleHandleChange, 1000),[]);

  // const debounceChange =useMemo(()=>ourDebounce(debounceHandleChange, 300),[]);
  // const throttleChange =useMemo(()=>ourThrottle(throttleHandleChange, 1000),[]);

  // console.log(debounceChange)
  return (
    <>
      {/* <div>
        <input type="text" onChange={debounceChange} />
        <h2>debounce:{debounceInput}</h2>
      </div>
      <div>
        <input type="text" onChange={throttleChange} />
        <h2>throttle:{throtlleInput}</h2>
      </div> */}

    </>
  );
};

export default TodoList2;
//debounce
// 1. accept a function and delay
// 2. debounce is basically user will wait for sometime
//    to execute the function

// 3.it will have timer;
// 4.if timer already is running we have to reset the timer
// 5. it will return a function which are passed with arguments
// 6. when user clicked again again it will clear last function call
// 7. set the timeout with a function and delay
// 8. we will call our functiom with arguments

// 9. we have to debounce the function which written
// 10. basically we are passing handlechange with delay 500ms in ourDebounce fn
// 11. we stored the whole ourdebounce fn with input handle function in debouncechange
// 12.after we put that fn(dounceHandlechange) in input of html onchange event

// throttle
// 1. accept a function and delay
// 2. Throttle means after certain interval of time it will always call a function
// 3 . it will also have timer
// 4.  it return a function with arguments
// 5. if timer is not there than only we will call our function with arguments
// 6. and timer will be set and after a delay timer will be null

// problem
// when ever we set the throttleInput state it will re-rendered
// so the throttle function will be created again so the timer will not be there

//here we are a value with another function we have to useMemo
// use memo return a value which already a function