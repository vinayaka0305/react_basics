import React, { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if(!item){
        return;
    }
    const newItem = {
      id: crypto.randomUUID(),
      value: item,
      isCompleted:false
    };
    setList((prev) => [...prev, newItem]);
    setItem("");
  };

  const deletItem = (id) => {
    console.log(id);
    const newList = list.filter((val) => val.id !== id);
    setList(newList);
  };

  const completedTask =(id)=>{
    const updatedList = list.map((val)=>{
        if(val.id === id){
            return {...val,isCompleted:!val.isCompleted}
        }
        return val;
    })
    setList(updatedList)
  }


  console.log(list);
  return (
    <section>
      <h1>To-do app</h1>
      <section>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </section>
      {list?.length ? (
        <section>
          {list.map((val, index) => (
            <li key={index} style={{textDecoration:val.isCompleted?'line-through':'none'}}>
              {val.value}
              <button onClick={()=>completedTask(val.id)}>completed</button>
              <button onClick={() => deletItem(val.id)}>delete</button>
            </li>
          ))}
        </section>
      ) : (
     <p>No messages</p>
      )}
    </section>
  );
};

export default Todo;
