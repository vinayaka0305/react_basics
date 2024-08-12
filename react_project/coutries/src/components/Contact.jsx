import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const params = useParams();
  console.log(params);
  
  return (
    <div>Contact US</div>
  )
}

export default Contact