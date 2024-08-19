import React, { useEffect, useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  let timeId;

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("useEffect");
    // document.querySelector("#nc-title");
    // console.log(document.querySelector("#nc-title"));
   timeId = setInterval(()=>{
      console.log('hi')
    },1000)

    return()=>{
      console.log('clean-up function');
      
      clearInterval(timeId)
    }
  }, [count]);

  

  return (
    <>
      <h2 id="nc-title" className="mt-3">
        {name}
      </h2>
      <div className="flex gap-4 mt-10 items-center">
        <button
          onClick={decrement}
          className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
        >
          -
        </button>
        <h2>count: {count}</h2>
        <button
          onClick={increment}
          className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
        >
          +
        </button>
      </div>
      <div className="flex gap-4 mt-10 items-center">
        <button
          onClick={() => setCount2((prev) => prev - 1)}
          className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
        >
          -
        </button>
        <h2>count: {count2}</h2>
        <button
          onClick={() => setCount2((prev) => prev + 1)}
          className="bg-blue-400 rounded-sm px-4 py-1 cursor-pointer"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
