import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "assets/Generic_store.svg"
import SearchBox from "components/SearchBox/SearchBox.component";
import UserControls from "components/UserControls/UserControls.component";


const NavBar = () => (
  <div>
    <Logo />
    <SearchBox />
    <UserControls />
  </div>
)

export default NavBar;