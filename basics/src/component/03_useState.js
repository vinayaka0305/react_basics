import React, { useState,useEffect } from "react";

// using useEffect we can some form of side effects
function App() {
  const[resouresType,setResourceType] = useState('posts')
  const[items,setItems] = useState([])

  // console.log('rendered');

  // useEffect(()=>{
  //   // what ever in this arrow fnc it is going to 
  //   //execute every single time of application renderes
  //   console.log("resouce type changed");
  //   // it take the second parament that is array
  //   // what ever we pass in the array is going to be values
  //   // when value change the hook is going to run
  // },[resouresType]t)
  // //the [] empty array never actual changes b/w different renders 

  useEffect(()=>{
    // fetch(`https://jsonplaceholder.typicode.com/${resouresType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    console.log("resoure changed")

    return()=>{
      console.log("returned from resource changed")
      // here first it will run the return code and then actual setup code
      // the reason is return is essentially considered as clean up 
      // ever time the useeffect ran what ever in return ran first to clean up
      //what ever we did last time 
    }
  },[resouresType])

  // here every time when we change our resource type, 
  // we are running a side effect of our code

  return (
    <>
      <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=>setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resouresType}</h1>
      {items.map((item)=>{
        return (<pre>{JSON.stringify(item)}</pre>)
      })}
    </>
  );
}

export default App;
