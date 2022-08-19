import styled from "styled-components";

const StyledOfferGroups = styled.div`
  & .offer {
    display: inline-block;
    position: relative;
    width: 480px;
    height: 500px;

    & img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    & h1 {
      backdrop-filter: blur(5px) saturate(1);
      bottom: 0;
      color: var(--text-light-clr);
      background: rgba(0, 0, 0, 0.25);
      font-size: 32px;
      left: 0;
      position: absolute;
      text-align: center;
      width: 100%;
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

export default StyledOfferGroups;
