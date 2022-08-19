import styled from "styled-components";

export const StyledNavBar = styled.header`
  background: var(--primary-clr);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  & > div {
    padding: 5px 15px;
  }
`;

export const StyledSiteControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyledShopBtn = styled.div`
  align-items: center;
  border: 1px solid #000000;
  border-radius: 16px;
  display: flex;
  font-size: 32px;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  line-height: 44px;
  text-align: center;
  width: 121px;
`;

export const StyledShop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
