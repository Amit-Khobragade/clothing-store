import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer.component";
import NavBar from "components/NavBar/NavBar.component";

const Body = () => (
  <div>
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);
export default Body;