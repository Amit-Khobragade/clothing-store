import React from "react";
import Logo from "assets/Generic_store.svg"
import SearchBox from "components/SearchBox/SearchBox.component";
import UserControls from "components/UserControls/UserControls.component";
import { Sections } from "components/Sections/Sections.component";


const NavBar = () => (
  <div>

    <div>
      <Logo />
      <SearchBox />
      <UserControls />
    </div>
    <Sections />
  </div>
)

export default NavBar;