import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  expense,
  setExpense,
  setExpenses,
  editindRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 3, message: "Title should be at least 5 character long" },
    ],
    category: [{ required: true, message: "please select category" }],
    amount: [
      { required: true, message: "please enter amount" },
      { pattern: /^[1-9]\d*(\.\d+)?$/, message: "pleas enter a valid amount" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};
  
    Object.entries(formData).forEach(([key, val]) => {
      const rules = validateConfig[key];
  
      // Check if there are validation rules for this field
      if (!rules) return;
  
      rules.some((rule) => {
        if (rule.required && !val) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && val.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
        if(rule.pattern && !rule.pattern.test(val)){
          errorsData[key] = rule.message;
          return true;
        }
      });
    });
  
    setErrors(errorsData);
    return errorsData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResults = validate(expense);

    // console.log(Object.keys(validateResults));

    if (Object.keys(validateResults).length) return;

    if (editindRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editindRowId) {
            return { ...expense, id: editindRowId };
          }
          return prevExpense;
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
        email: "",
      });
      setEditingRowId("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
      email: "",
    });
  };

  // console.log(expense);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({})
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        />
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
        <button className="add-btn">{editindRowId ? "Save" : "Add"}</button>
      </form>
    </>
  );
};

export default ExpenseForm;
