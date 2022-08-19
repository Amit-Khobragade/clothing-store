import React from "react";
import Logo from "assets/Generic_store.svg"
import SearchBox from "components/SearchBox/SearchBox.component";
import UserControls from "components/UserControls/UserControls.component";
import { Sections } from "components/Sections/Sections.component";
import { StyledSiteControls, StyledNavBar, StyledShopBtn, StyledShop } from "./NavBar.styles";


const NavBar = () => (
  <StyledNavBar>
    <StyledSiteControls>
      <StyledShop>
        <Logo />
        <StyledShopBtn>
          Shop ⮊
        </StyledShopBtn>
      </StyledShop>
      <SearchBox />
      <UserControls />
    </StyledSiteControls>
    <Sections />
  </StyledNavBar>
)

export default NavBar;