import styled from "styled-components";

const StyledSections = styled.nav`
  align-self: center;
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  width: max-content;

  & > h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default StyledSections;
