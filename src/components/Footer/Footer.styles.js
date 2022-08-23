import styled from "styled-components";

const StyledFooter = styled.footer`
  background: var(--footer-clr);
  display: flex;
  height: max-content;
  padding: 30px 10px;
  width: 100%;

  & .navigation {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  & .links {
    list-style: none;

    & * {
      color: var(--text-light-clr);
      text-align: left;
    }
  }
`;

export default StyledFooter;
