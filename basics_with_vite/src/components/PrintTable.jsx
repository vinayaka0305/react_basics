import React, { useEffect, useState } from "react";

const PrintTable = ({ calculateTable }) => {

  const[rows,setRows] = useState([]);

  useEffect(()=>{
    console.log('print table runs!')
   setRows(calculateTable(2))
  },[calculateTable])
  return(
    <>
    {rows.map((row,index)=>(
        <p key={index}>{row}</p>
    ))}
    </>
  );
};

export default PrintTable;
 