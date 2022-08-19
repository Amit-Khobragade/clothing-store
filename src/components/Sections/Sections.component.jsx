import React, { useContext } from "react";
import { SectionContext } from "context/SectionContext/SectionContext";
import StyledSections from "./Sections.styles";

export const Sections = (props) => {
  const sections = useContext(SectionContext)[0];
  if (!sections) {
    return <h1>loading sections...</h1>
  }
  return (
    <StyledSections>
      {Object.keys(sections).map((key, index) => <h2 key={index}>{key}</h2>)}
    </StyledSections>
  )
}