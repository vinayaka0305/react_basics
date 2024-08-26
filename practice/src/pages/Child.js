import React from 'react'

const Child = ({name,toChild}) => {

    const updateChild = ()=>{
        toChild('vinnu')
    }

  return (
    <div>{name}</div>
  )
}

export default Child