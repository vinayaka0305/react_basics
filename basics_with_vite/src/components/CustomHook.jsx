import React from "react";
import useFetch from "../customHooks/useFetch";

const CustomHook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data.map((val) => (
        <p key={val.id}>
          {val.id}. {val.name}
        </p>
      ))}
    </>
  );
};

export default CustomHook;

// const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json();
// setData(data);
// console.log(data);
