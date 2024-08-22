import React, { useState } from "react";

const CounterWithFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{display:'flex',gap:'10px'}}>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default CounterWithFunction;
