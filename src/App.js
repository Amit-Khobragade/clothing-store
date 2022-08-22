import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AuthPage from "auth/AuthPage";
import Body from "areas/Body/Body";
import UnderDevelopmentPage from "./UnderDevelopmentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/auth" element={<AuthPage />} exact />
        <Route path="/dev" element={<UnderDevelopmentPage />} exact />
      </Route>
    </Routes>
  );
};

export default App;
