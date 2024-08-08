import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div className='search-container'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" onChange={(e)=>setQuery(e.target.value.toLocaleLowerCase())} placeholder='search for a country....' />
    </div>
  )
}

export default SearchBar