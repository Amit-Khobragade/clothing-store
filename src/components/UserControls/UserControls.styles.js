import styled, { css } from "styled-components";

export const StyledUserControls = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: space-evenly;
  width: 10rem;

  ${(props) =>
    props.current.includes(1) &&
    `
      flex-direction: column;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px 10px 0 0;
      position: relative;
  `}
`;

export const UserController = styled.div`
  align-items: center;
  background: transparent;
  cursor: pointer;
  flex-grow: 0.00001;
  justify-content: space-evenly;
  transition: all 500ms linear;
  width: 2rem;
  ${(props) => {
    if (props.current === 1) {
      return css`
        display: flex;
        flex-grow: 1;
        width: 100%;
      `;
    } else if (props.current === 0) {
      return css`
        display: inline-block;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};

  & > svg {
    display: ${(props) => (props.current === -1 ? "none" : "inline-block")};
  }

  & > h3 {
    display: ${(props) => (props.current === 1 ? "inline-block" : "none")};
    font-size: 1.5rem;
  }
`;

export const DropDownUserController = styled.div`
  bottom: 0;
  background: white;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  position: absolute;
  width: 100%;
  max-width: 10rem;
  height: 0;
  transition: all 250ms linear, transform 500ms;

  ${(props) =>
    props.current === 1 &&
    css`
      height: 10rem;
      transform: translateY(100%);
      transition: all 500ms linear, transform 250ms;
    `}

  & div {
    flex-basis: 80%;
  }
  & a {
    color: var(--text-dark-clr);
    text-align: center;
  }
`;
