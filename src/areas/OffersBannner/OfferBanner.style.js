import styled, { css, keyframes } from "styled-components";

const btnAnimation = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;

export const BannerDisplay = styled.div`
  overflow: hidden;
  position: relative;
`;

export const OffersContainer = styled.div`
  height: calc(100vh - 79px);
  display: flex;
  transform: translateX(calc(${(props) => props.currentPos}* -100vw));
  transition: transform 1.5s cubic-bezier(0.9, 0.05, 0.46, 1.22);
  will-change: transform;
`;

export const BannerController = styled.div`
  position: absolute;
  width: 100%;
  bottom: 15%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const BannerControllerBtn = styled.div`
  background: #ededed;
  border-radius: 10px;
  height: 7px;
  width: 30px;

  & > div {
    background: #959595;
    border-radius: 10px;
    height: 100%;
    width: 0;

    ${(props) =>
      props.isActive &&
      css`
        animation: ${btnAnimation} ${props.duration}ms ease-in-out;
      `}
  }
`;
