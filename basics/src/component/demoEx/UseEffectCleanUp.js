import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {

    const[time,setTime] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            // setTime(prev=>prev +1)
        },1000)
        return ()=>{
             clearInterval(timer)
        }
    })
    // setInterval is used for countdowm timer 
    // this interval not stop unless we use the clear interval fnc
    // if we are setting state using setInterval and the side effect will 
    // - not cleaned up when our component unmounts or we are no longer to
    // use it, the state is destroyed with the component 
    // but the setInterval fnc will keep running and thats make our app slow and low in performance
    //so it is important to clean up this fnc; 

    // we need use clean fnc which calls when the component get unmounted
  return (
    <div>   
        <h3>{time} in seconds</h3>
    </div>
  )
}

export default UseEffectCleanUp