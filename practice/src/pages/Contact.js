import React from 'react'
import Child from './Child'

const Contact = () => {

  const userName = 'vinayaka'
  const toChild = ()=>{
    console.log("hi")
  }

  return (
    <div>
      <h1>name form child:</h1>
      <Child name={userName} toChild={toChild}/>
    </div>
  )
}

export default Contact