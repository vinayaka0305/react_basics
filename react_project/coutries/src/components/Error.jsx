import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    // console.log(error);
    
  return (
    <div>Somthing went wrong {error.status} {error.data}</div>
  )
}

export default Error