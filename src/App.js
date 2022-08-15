import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "components/NavBar/NavBar.component";
import Home from "./Home";
import AuthPage from "auth/AuthPage";
import Body from "components/Body/Body.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/auth" element={<AuthPage />} exact />
      </Route>
    </Routes>
  );
};

export default App;
