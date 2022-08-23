import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    --primary-clr: #EBFFEB;
    --secondary-clr: #D5FFED;
    --teritiary-clr: #3B403B;
    --text-light-clr: #E0E0E0;
    --text-dark-clr: #2F2F2F;
    --footer-clr: #682E2E;
    background: var(--primary-clr);
  }

  h1, h2, h3, p {
    text-align: center;
    text-transform: capitalize;
  }

  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
  }

  h2 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
  }

  h3 {
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    text-align: center;
  }


  p {
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`;

export default GlobalStyles;
