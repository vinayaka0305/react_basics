import React from 'react'
import useFetch from './useFetch'

const ExamaPle = () => {

  const data = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {data.map((val,index)=>(
        <p key={index}>{val.id}. {val.name}</p>
      ))}
    </div>
  )
}

export default ExamaPle