import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const[name,setName] = useState('')
//   const[count,setCount] = useState(0)

//   useEffect(()=>{
//     setCount(prev => prev + 1)
//   })

const count = useRef(0) // it will return an object with one property that is current
console.log(count); // we get object with one current property

useEffect(()=>{
     count.current = count.current + 1;
})
// use ref is used create a mutable variable without causing re-render
  return (
    <>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <h2>Name : {name}</h2>
        <h2>render : {count.current}</h2>

    </>
  );
};

export default UseRef;
