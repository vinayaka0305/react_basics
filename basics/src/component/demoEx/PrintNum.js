import React, { useEffect, useState } from 'react'

const PrintNum = ({print}) => {

const[data,setData] = useState([])

useEffect(()=>{
  console.log('number printing')
  setData(print)
},[print])
  return (
    <div>
      {data.map((val,index)=>(
        <p key={index}>{val}</p>
      ))}
    </div>
  )
}

export default PrintNum