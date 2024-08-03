import React, { useEffect, useState } from 'react'

const PrintNum = ({calPrint}) => {


  const[data,setaData] = useState([]);

  useEffect(()=>{
    console.log("print fnc runs");
    setaData(calPrint())
  },[calPrint])
  return (
   <>
   {data.map((val,index)=>(
    <p key={index}>{val}</p>
   ))}
   </>
  )
}

export default PrintNum