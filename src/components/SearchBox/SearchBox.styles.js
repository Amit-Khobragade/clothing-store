import styled from "styled-components";

const StyledSearchBox = styled.div`
  position: relative;
  width: 318px;
  height: 58px;

  & input {
    background: var(--secondary-clr);
    border-color: transparent;
    border-radius: 19px;
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25),
      inset -3px -3px 4px rgba(0, 0, 0, 0.25);

    line-height: 44px;
    width: 100%;

    & {
      padding-left: 80px;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      height: 100%;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }
`;

export default StyledSearchBox;
