import React from "react";
import SearchIcon from "assets/search.svg"
import StyledSearchBox from "./SearchBox.styles";

const SearchBox = (props) => {
  return (
    <StyledSearchBox>
      <SearchIcon width={35} height={35} />
      <input type="text" name="search" placeholder="Search" />
    </StyledSearchBox>
  )
}

export default SearchBox;