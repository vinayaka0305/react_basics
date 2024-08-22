import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/stopwatch1">Stop Watch 1</NavLink>
        <NavLink to="/stopwatch2">Stop Watch 2</NavLink>
        <NavLink to="/stopwatch3">Stop Watch 3</NavLink>
    </nav>
  )
}

export default Navbar