import React,{useState} from "react";


function App() {

  // function initial(){
  //   console.log("hi")
  //   return 4;
  // }

  // it is function version to set a intial state 
  // if won't use this rerender again and again
  // we have to use specially while builing low complexity



  const[count,setCount] = useState(5);

  function decrement(){
    // setCount(count-1);
    // // 4 => 3;
    // setCount(count-1);
    // 4 => 3
    // here the prev state value is not decreased
    // only it decrement by one if u call two times

    setCount(prevCount=>prevCount-1)
    // // 4 => 3
    setCount(prevCount=>prevCount-1)
    // 3 = > 2
    // two times we are calling so it will give 2 as the value

    // here it will the update the exact prev value of the state
    // 
  }

  function increment(){
    setCount(prevCount=>prevCount+1)
  }
  

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
