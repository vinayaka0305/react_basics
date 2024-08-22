import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  let navigate = useNavigate();

  const redirectToUsers=()=>{
    navigate('/users')
  }

  return (
    <div>Profile Page
      <button onClick={redirectToUsers}>See other users</button>
    </div>
    
  )
}

export default Profile