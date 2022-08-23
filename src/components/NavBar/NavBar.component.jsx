import React from "react";
import SearchBox from "components/SearchBox/SearchBox.component";
import UserControls from "components/UserControls/UserControls.component";
import Sections from "components/Sections/Sections.component";
import StyledNavBar from "./NavBar.styles";
import IconBtn from "styles/IconBtn/IconBtn.styles";


const NavBar = () => (
  <StyledNavBar>
    <IconBtn url="assets/Generic_store.svg" size="2rem" />
    <Sections />
    <SearchBox />
    <UserControls />
  </StyledNavBar>
)

export default NavBar;