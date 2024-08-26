import React, { useContext } from 'react'
import { ThemeContext } from '../components/contextApi/ThemeProvider'
import useFetch from './useFetch';

const Home = () => {

  const {cssStyle,toggle} = useContext(ThemeContext);

  const data = useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(data);
  return (
    <>
    <div>Home</div>
    <div style={cssStyle}>
      {data.map((user)=>(
        <p key={user.id}>{user.id}. {user.name}</p>
      ))}
      <h2>toggle</h2>
      <button onClick={toggle}>click here</button>
    </div>
    </>
    
  )
}

export default Home