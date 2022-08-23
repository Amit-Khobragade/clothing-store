import styled, { css } from "styled-components";

const IconBtn = styled.div`
  background: url(${(props) => props.url}) no-repeat center center/contain;
  height: ${(props) => props.size ?? "1rem"};
  width: ${(props) => props.size ?? "1rem"};
`;

export default IconBtn;
