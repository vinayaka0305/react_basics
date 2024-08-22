import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data);
  };
  return (
    <>
      <div>message from child {message}</div>
      <Child onMessage={handleDataFromChild}/>
    </>
  );
};

export default Parent;
