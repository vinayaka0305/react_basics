import React, { useState } from "react";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [lists, setLists] = useState([]);

  const addItem = () => {
    if (!userInput) {
      alert("pls enter something");
      return;
    }
    const newLists = {
      id: crypto.randomUUID(),
      value: userInput,
      isCompeleted: false,
    };
    setLists((prev) => [...prev, newLists]);
    setUserInput("");
    // console.log(newLists);
  };

  const completedTask = (id) => {
    const updatedList = lists.map((item) => {
      if (item.id === id) {
        return { ...item, isCompeleted: !item.isCompeleted };
      }
      return item;
    });
    setLists(updatedList);
  };

  const deletedTask = (id) => {
    const newList = lists.filter((item) => item.id !== id);
    setLists(newList);
  };
  return (
    <>
      <h1>TodoList app</h1>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {lists.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.isCompeleted ? "line-through" : "none",
              margin: "4px",
            }}
          >
            {item.value}
            <button
              style={{ margin: "5px" }}
              onClick={() => completedTask(item.id)}
            >
              completed
            </button>
            <button onClick={() => deletedTask(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
