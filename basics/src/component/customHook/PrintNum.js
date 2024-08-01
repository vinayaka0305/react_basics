import React, { useState } from 'react'

const PrintNum = ({printNumber}) => {

   const [data,setData] = useState([])

   setData(printNumber)

  return (
    <div>
        {data.map((val)=>{
            <p>{val}</p>
        })}
    </div>
  )
}

export default PrintNum