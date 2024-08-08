import React, { useState } from 'react'

const Header = ({setQuery}) => {

  return (
    <div>
        <label htmlFor="search">Search</label>
        <input type="text" id='search' onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Header