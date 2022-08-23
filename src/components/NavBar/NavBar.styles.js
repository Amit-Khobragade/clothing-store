import styled from "styled-components";

const StyledNavBar = styled.header`
  align-items: center;
  background: var(--primary-clr);
  box-shadow: 0px 1px 9px #8d8d8d;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

export default StyledNavBar;
