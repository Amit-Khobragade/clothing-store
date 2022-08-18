import React, { useContext } from "react";
import { SectionContext } from "context/SectionContext/SectionContext";

export const Sections = (props) => {
  const sections = useContext(SectionContext)[0];
  if (!sections) {
    return <h1>loading sections...</h1>
  }
  return (
    <div>
      {Object.keys(sections).map((key, index) => <h1 key={index}>{key}</h1>)}
    </div>
  )
}