import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "components/NavBar/NavBar.component";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar></NavBar>}>
        <Route path="/" element={<Home />} exact />
      </Route>
    </Routes>
  );
};

export default App;
