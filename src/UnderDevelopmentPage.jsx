import React from "react";
import styled from "styled-components";
import Warning from "./assets/warning.svg"

const StyledWarningMessage = styled.div`
  border: 2px solid black;
  display: flex;
  outline: 2px solid black;
  outline-offset: 4px;
  width: fit-content;
  border-radius: 4px;
  margin: 50px;
  padding: 20px;

  & > svg {
    width: 100px;
  }
`

const UnderDevelopmentPage = () => {
  return (
    <main style={{ height: "80vh", width: "100%" }}>
      <StyledWarningMessage>
        <Warning />
        <div>
          <h1>
            this site is under development
          </h1>
          <p>
            click
            <a target="#" href={"https://github.com/Amit-Khobragade/clothing-store"}> here </a>
            to know more
          </p>
        </div>
      </StyledWarningMessage>
    </main>
  )
}

export default UnderDevelopmentPage;