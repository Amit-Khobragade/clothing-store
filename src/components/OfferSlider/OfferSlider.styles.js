import styled, { css } from "styled-components";

export const StyledSliderComponent = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: visible;
  scroll-behavior: smooth;
  scrollbar-width: none;
  white-space: nowrap;
  will-change: scroll-position;

  & h1 {
    white-space: break-spaces;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderButton = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  font-size: 60px;
  font-weight: 300;
  height: 60px;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  vertical-align: middle;
  width: 60px;
  z-index: 10;

  ${(props) =>
    props.next
      ? css`
          right: 0;
        `
      : props.prev &&
        css`
          left: 0;
        `}
  ${(props) =>
    props.inactive &&
    css`
      display: none;
    `}
`;
