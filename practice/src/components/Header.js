import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

  return (
    <nav className='nav-bar'>
        <NavLink to="/">home</NavLink>
        <NavLink to="/useReducer">useReducer</NavLink>
        <NavLink to="/useRef">useRef</NavLink>
        <NavLink to="/useMemo">useMemo</NavLink>
        <NavLink to="/useCallback">useCallback</NavLink>
        <NavLink to="/st1">st1</NavLink>
        <NavLink to="/todo">To-do</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/perfomance">Debounce&Throttle</NavLink>
        <NavLink to="/contact">contact</NavLink>
    </nav>
  )
}

export default Header