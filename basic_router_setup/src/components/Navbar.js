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
        <NavLink to="/todo">To do list</NavLink>
        <NavLink to="/todo2">To do list 2</NavLink>
        <NavLink to="/preformance">Debounce & throttle</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/formik">Form using formik</NavLink>
    </nav>
  )
}

export default Navbar