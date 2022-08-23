import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SectionContextProvider } from "context/SectionContext/SectionContext";
import { OffersContextProvider } from "context/OffersContext/OffersContext";
import GlobalStyles from "./Global.styles";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SectionContextProvider>
        <OffersContextProvider>
          <GlobalStyles />
          <App />
        </OffersContextProvider>
      </SectionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
