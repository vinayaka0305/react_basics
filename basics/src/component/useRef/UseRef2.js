import React, { useRef } from "react";

const UseRef2 = () => {

   const inputELe = useRef()

  const handleClick = () => {
    console.log("function run");
    console.log(inputELe);
    console.log(inputELe.current);
    inputELe.current.style.width = "300px"
    inputELe.current.focus()
  };
  return (
    <div>
      <input type="text" ref={inputELe}/>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default UseRef2;
