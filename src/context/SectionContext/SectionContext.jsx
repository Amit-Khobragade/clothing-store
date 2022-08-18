import React, { createContext, useEffect, useState } from "react";
import { getSections } from "auth/DB/sectionDB";

export const SectionContext = createContext([null, () => { }])

export const SectionContextProvider = (props) => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    getSections().then(setSections);
  }, []);

  return (
    <SectionContext.Provider value={[sections, setSections]}  {...props} />
  )
}