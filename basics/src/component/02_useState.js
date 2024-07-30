import React, { useState, useEffect } from "react";
function App() {

  const[windowWidth,setWindowWidth] = useState(window.innerWidth);

  // function handleResize(){
  //   setWindowWidth(window.innerWidth)
  // }

  const handleResize = ()=>{
    setWindowWidth(window.innerWidth)


  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)

    return ()=>{
      window.addEventListener('resize', handleResize);
      // when the component gets unmounted this return is gonna be
      //called and it going remove the eventlisteners for us
      //
    }
  },[])
  // onmount we are calling window resize event;

  // but when we add eventListener 
  // for example if we delte this app component or to be unmounted 
  // we have remove the addeventListeners, other wise its constly being added
  // but never actualy removed we going to slow down the app
  // we have clean up the hook 

  return <div>{windowWidth}</div>;
}

export default App;
