import React from 'react'
import { useParams } from 'react-router-dom'

const UsersDetails = () => {
    // let parameters = useParams();
    // console.log(parameters);
    const{userid} = useParams();
  
    
  return (
    <div>UsersDetails of {userid}</div>
  )
}

export default UsersDetails