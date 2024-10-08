import React from 'react'
import useFetch from './useFetch'

const Example = () => {

  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      {data.map((val,index)=>(
        <p key={index}>{val.id}. {val.name}</p>
      ))}
    </div>
  )
}

export default Example