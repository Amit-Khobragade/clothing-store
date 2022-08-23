import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer.component";
import NavBar from "components/NavBar/NavBar.component";

const Body = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);
export default Body;