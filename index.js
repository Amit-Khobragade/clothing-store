import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
