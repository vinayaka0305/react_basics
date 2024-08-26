import React, { useEffect, useState } from 'react'

const PrintNum = ({printFn}) => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        console.log('fn called')
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

export default PrintNum