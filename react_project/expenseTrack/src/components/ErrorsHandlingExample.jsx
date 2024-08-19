import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 5, message: "Title should be at least 5 character long" },
    ],
    category: [{ required: true, message: "please select category" }],
    amount: [{ required: true, message: "please enter amount" }],
    email: [
      { required: true, message: "please enter email" },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    // console.log(Object.entries(formData));
    Object.entries(formData).forEach(([key, val]) => {
      // console.log(validateConfig[key]);
      validateConfig[key].some((rule) => {
        // console.log(rule);
        if (rule.required && !val) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && val.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
        if(rule.pattern && !rule.pattern.test(val)){
          errorsData[key] = rule.message
          return true;
        }
      });
    });

    // if (!formData.title) {
    //   errorsData.title = "title is required";
    // }
    // if (!formData.category) {
    //   errorsData.category = "category is required";
    // }
    // if (!formData.amount) {
    //   errorsData.amount = "amount is required";
    // }
    setErrors(errorsData);
    // console.log(formData)
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResults = validate(expense);

    // console.log(Object.keys(validateResults));

    if (Object.keys(validateResults).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
      email:""
    });
  };

  // console.log(expense);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        {/* <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
          <p className="error">{errors.title}</p>
        </div> */}
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        />
        {/* <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
          <p className="error">{errors.category}</p>
        </div> */}
        <Select
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          options={["grocery", "clothes", "bills", "education", "medicine"]}
          defaultOption="Select Category"
          error={errors.category}
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          value={expense.email}
          onChange={handleChange}
          error={errors.email}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
