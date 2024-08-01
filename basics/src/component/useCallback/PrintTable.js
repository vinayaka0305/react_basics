import React, { useEffect, useState } from 'react'

const PrintTable = ({calculateTable}) => {

    const[rows,setRows] = useState([]);

    useEffect(()=>{
        console.log("print table runs");
        setRows(calculateTable(2))
    },[calculateTable])

  return (
    rows.map((val,index)=>(
        <p key={index}>{val}</p>
    ))
  )
}

export default PrintTable