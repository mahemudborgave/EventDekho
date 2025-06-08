import { useContext, useState } from "react"
import SearchContext from "../context/SearchContext";

function Search({ handleChange, handleClick }) {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div>
      <div className='px-4 py-2 bg-gray-200 m-auto rounded-full flex items-center'>
        <input type="text" placeholder="Search for event, college, etc" className='focus:outline-none outline-0 flex-grow ml-2 text-md' onChange={handleChange} value={searchValue} />
        <i className="fa-solid fa-magnifying-glass p-4 bg-amber-300 rounded-full"></i>
        <span className="material-symbols-outlined ml-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer" onClick={handleClick}>
          close
        </span>
      </div>
    </div>
  )
}

export default Search