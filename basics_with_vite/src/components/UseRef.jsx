import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
//   const[count,setCount]  = useState(0);

//  if we use useState we stuck in a infinite loop 
//if we want to check count of render

//   useEffect(()=>{
//     setCount((prev)=>prev+1)
//   },)

// first usecase of useRef is used to create a mutable variable
// which don't cause re-render

//  const count = useRef(0);
// //  console.log(count);
//  // using useEffect we can update value of count when component rendered;

//  useEffect(()=>{
//     count.current = count.current + 1;
//  })
///////////////////////////////////////////////////////////////

const inputEle = useRef();

// to access the dom element we use useRef
// we have provide attribute ref to that element which
// we have to modify
 
const handler = ()=>{
    inputEle.current.style.width = "300px"
    inputEle.current.focus()
}

console.log(inputEle.current);

  return (
    <div>
      <input type="text" ref={inputEle} onChange={(e) => setText(e.target.value)} />
      <h2>text:{text}</h2>
      {/* <h2>render:{count.current}</h2> */}
      <button onClick={handler}>click me</button>

    </div>
  );
};

export default UseRef;
