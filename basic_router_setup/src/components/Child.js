import React from 'react'

const Child = ({onMessage}) => {

    const messageHandler = ()=>{
        onMessage('vinayaka')
    }
  return (
    <>
     <div>Child</div>
     <button onClick={messageHandler}>Send to parent</button>
    </>
   
  )
}

export default Child