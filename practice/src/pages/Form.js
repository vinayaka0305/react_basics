import React, { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChangeHandler = (e) => {
    // console.log(e.target);
    const{name,value} = e.target;
    setUserDetails((prev)=>{
        return{...prev,[name]:value}
    })
  };

  const handleSubmit=(e)=>{
    e.preventDefault()  
    console.log(userDetails)
  }

  const{userName,email,password,cpassword} = userDetails;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Name</label>
        <input type="text" name="userName" value={userName} onChange={onChangeHandler} />
        {userName && userName.length<5?<p style={{color:'red'}}>name should contain atleast 5 letter</p>:''}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={onChangeHandler} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={onChangeHandler} />
      </div>

      <div>
        <label htmlFor="cpassword">confirm Password</label>
        <input type="password" name="cpassword" value={cpassword} onChange={onChangeHandler} />
        {password && password !== cpassword?<p style={{color:'red'}}>password dose't match</p>:null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
