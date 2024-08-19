import React, { useEffect, useRef, useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  // const [title,setTitle] = useState('')
  // const [category,setCategory] = useState('')
  // const [amount,setAmount] = useState('')

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const myRef = useRef(0);

  // let myNum = 0;

  // useEffect(()=>{
  //   console.log(myRef.current)
  //   myRef.current.style.backgroundColor="red";
  // })

  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // const formData = new FormData(e.target);
    // const data = {};
    // for (const [key, value] of formData.entries()) {
    //   //for values data.values
    //   //for both key and values data.entries
    //   data[key] = value;
    // }
    // console.log(data);
    // getFormData(e.target);
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // // console.log(getFormData(e.target));
    // e.target.reset()
    // console.log({title,category,amount})
    // const expense ={title,category,amount,id:crypto.randomUUID()}
    // console.log(expense);
    // setExpenses((prevState)=>[...prevState,expense]);
    // setTitle('')
    // setCategory('')
    // setAmount('')
    // console.log(expense);
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title:titleRef.current.value,
    //     category:categoryRef.current.value,
    //     amount:amountRef.current.value,
    //     id:crypto.randomUUID()
    //   },
    // ]);
  };

  // console.log(title);
  // console.log(category);
  //  console.log(amount);

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  // useEffect(()=>{
  //   console.log('hi')
  // })

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            // ref={titleRef}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
            // ref={categoryRef}
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
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
            // ref={amountRef}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default ExpenseForm;
