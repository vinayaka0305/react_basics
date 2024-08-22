import React, { useEffect, useReducer } from "react";

const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  console.log(action);
  // console.log(state);

  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseRed = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("hi");
  }, []);

  const increment = () => {
    dispatch({ type: ACTION.INCREASE });
  };

  const decrement = () => {
    dispatch({ type: ACTION.DECREASE });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
};

export default UseRed;
