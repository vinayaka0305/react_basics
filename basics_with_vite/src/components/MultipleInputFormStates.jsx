import React, { useState } from "react";

const MultipleInputFormStates = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    // const name = e.target.name;
    // const value = e.target.value
    // console.log(name,value);
    // 3
    // here we can do object destructing
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    //2.
    // in set details we have pass prev parameters for prev values
    // first we have return all previous value using spread operator
    // we can access object property using squares bracket[] and we
    //- can pass variable inside it
    // if we write any thing inside the input , first spread operator
    // - will return all previous properties and then we find property[email]
    // and it replace the value with email field values
  };

  //1.
  // here we have to add all fields name as
  // -its input name attribute from our state object

  const handleSubmit=(e)=>{
    e.preventDefault()
    // it prevent the forms default behaviour 
    // if don't use this it will refresh the page
    console.log(details);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Name :</h3>{" "}
        <input type="text" name="name" onChange={handleChange} />
        <h3>Email :</h3>{" "}
        <input type="email" name="email" onChange={handleChange} />
        <h3>Password :</h3>{" "}
        <input type="password" name="password" onChange={handleChange} />
        <h3>Address :</h3>{" "}
        <textarea name="address" onChange={handleChange}></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
};

export default MultipleInputFormStates;
