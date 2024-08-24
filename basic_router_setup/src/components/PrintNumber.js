import React, { useEffect, useState } from 'react'

const PrintNumber = ({printFn}) => {

    const [data,setData] = useState([]);
    
    useEffect(()=>{
        console.log('printing')
        setData(printFn())
    },[printFn])
  return (
    <div>
        {data.map((val,index)=>(
            <p key={index}>{val}</p>
        ))}
    </div>
  )
}

export default PrintNumber