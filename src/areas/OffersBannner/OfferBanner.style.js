import styled from "styled-components";

const StyledOffersBanner = styled.div`
  display: flex;
  height: calc(100vh - 128px);
  overflow: hidden;

  & .offer {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100vw;

    & > img {
      height: 100%;
      width: 100%;
    }

    & > h1 {
      border-radius: 30px;
      bottom: 30px;
      color: var(--text-dark-clr);
      left: 15px;
      position: absolute;
    }

    & > .filter {
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
    }
  }
`;

export default StyledOffersBanner;
