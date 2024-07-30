import React, { useContext, useState,useReducer} from "react";

//creating one for creating one default state


const ACTION = {
  INCREASE:"increase",
  DECREASE:"decrease"
}

const intialState = {count : 0}

const reducer = (state,action)=>{
  console.log(action);
  switch(action.type){
    case ACTION.INCREASE:
      return {count : state.count + 1};

    case ACTION.DECREASE:
      return {count : state.count - 1};

    default:
      return state
  }
}
//this reducer fnc take 2 parameters
//1.state -> in which the app has
//2.action -> means which action we have to perform

const App = () => {
  // const [count, setCount] = useState(0);


  const [state,dispatch] = useReducer(reducer,intialState)

  // it returns an array 1 element is current state & 2 is function

  const increase = () => {
   dispatch({type:ACTION.INCREASE})
  };

  const decrease = () => {
    // setCount((prevCnt) => prevCnt - 1);
    dispatch({type:ACTION.DECREASE})
  };

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={increase}>increment</button>
      <button onClick={decrease}>decrement</button>
    </>
  );
};

export default App;
