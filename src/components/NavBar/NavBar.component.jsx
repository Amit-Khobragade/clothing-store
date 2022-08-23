import React from "react";
import Logo from "assets/Generic_store.svg"
import SearchBox from "components/SearchBox/SearchBox.component";
import UserControls from "components/UserControls/UserControls.component";
import Sections from "components/Sections/Sections.component";
import StyledNavBar from "./NavBar.styles";


const NavBar = () => (
  <StyledNavBar>
    <Logo />
    <Sections />
    <SearchBox />
    <UserControls />
  </StyledNavBar>
)

export default NavBar;