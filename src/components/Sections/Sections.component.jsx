import React, { useContext } from "react";
import { SectionContext } from "context/SectionContext/SectionContext";
import StyledSections from "./Sections.styles";

const Sections = (props) => {
  const sections = useContext(SectionContext)[0];
  if (!sections) {
    return <h1>loading sections...</h1>
  }
  return (
    <StyledSections>
      {Object.keys(sections).map((key, index) => <h3 key={index}>{key}</h3>)}
    </StyledSections>
  )
}

export default Sections;