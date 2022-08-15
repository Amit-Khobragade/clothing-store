import React from "react";
import SearchIcon from "assets/search.svg"

const SearchBox = (props) => {
  return (
    <div>
      <SearchIcon width={35} height={35} />
      <input type="text" name="search" />
    </div>
  )
}

export default SearchBox;