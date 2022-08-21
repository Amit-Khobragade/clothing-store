import styled, { css } from "styled-components";

export const StyledOffersComponent = styled.div`
  border-radius: var(--border-radius);
  display: inline-block;
  position: relative;
  ${(props) =>
    props.isGrouped
      ? css`
          --border-radius: 10px;
          box-shadow: 2px 2px 6px rgba(107, 107, 107, 0.5);
          height: 500px;
          width: 480px;
          transition: all 500ms linear;

          &: hover {
            box-shadow: 3px 3px 6px rgba(107, 107, 107, 0.5);
            transform: scale(1.03);
          }
        `
      : css`
          height: 100%;
          width: 100vw;
        `}

  & > img {
    border-radius: var(--border-radius);
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  & > h1 {
    ${(props) =>
      props.isGrouped
        ? css`
            backdrop-filter: blur(5px) saturate(1);
            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
            bottom: 0;
            color: var(--text-light-clr);
            height: 8rem;
            left: 0;
            padding: 0.75rem;
            width: 100%;
            background: rgba(0, 0, 0, 0.25);
          `
        : css`
            bottom: 30px;
            left: 15px;
            color: var(--text-dark-clr);
          `}
    position: absolute;
  }
`;

export const StyledFilterComponent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 70%,
    rgba(255, 255, 255, 0.35) 100%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
