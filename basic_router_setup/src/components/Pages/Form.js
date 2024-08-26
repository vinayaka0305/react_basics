import React, { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    const { name, value } = e.target;
    // console.log(name,value)
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
    if (error[name]) {
      setError((prevError) => ({
        ...prevError,
        [name]: "",
      }));
    }
  };

  const validate = (formData) => {
    console.log(formData);
    let valid = true;

    const errorData = {};

    if (!formData.name) {
      errorData.name = "name is required";
      valid = false;
    }
    if (!formData.email) {
      errorData.email = "email is required";
      valid = false;
    }
    if (!formData.password) {
      errorData.password = "password is required";
      valid = false;
    }

    setError(errorData);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(userInput)) {
      setUserInput({
        name: "",
        email: "",
        password: "",
      });
      setError({});
    } else {
      console.log("Form has errors");
    }

    // console.log(userInput)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userInput.name}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>
      <div>
        email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userInput.email}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      </div>
      <div>
        password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userInput.password}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Form;
