import React, { useEffect, useState } from "react";
// import { todos } from "./data";

const About = () => {
  const [todosList, setTodosList] = useState([]);

  // useEffect(()=>{
  //   console.log(todos)
  //   setTodosList(todos)
  // },[])

  return (
    <>
      <h1>welcome to about</h1>
      <button onClick={() =>{
        import('./data').then((module)=>{
          console.log(module)
          setTodosList(module.todos)
        })
      }}>Load Data</button>
      {todosList.map((val) => (
        <li key={val.id}>{val.title}</li>
      ))}
    </>
  );
};

export default About;
