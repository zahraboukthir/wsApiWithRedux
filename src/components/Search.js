import React from 'react'

const Search = ({searchedvalue,handelsearch}) => {
  return (
    <div>
        <input type="search" placeholder='search' value={searchedvalue} onChange={(e)=>handelsearch(e.target.value)} />
    </div>
  )
}

export default Search