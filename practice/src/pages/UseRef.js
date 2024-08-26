import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const[text,setText] = useState('')
    const count = useRef(0)

    useEffect(()=>{
        count.current = count.current +1
    },)

    const inputElement = useRef();

   const handleChange =()=>{
    inputElement.current.style.width ="300px"
    inputElement.current.focus()
   }
  return (
    <div>
        <input type="text" ref={inputElement} value={text} onChange={(e)=>setText(e.target.value)}/>
        <h2>text:{text}</h2>
        <h2>count:{count.current}</h2>
        <button onClick={handleChange}>click here</button>
    </div>
  )
}

export default UseRef