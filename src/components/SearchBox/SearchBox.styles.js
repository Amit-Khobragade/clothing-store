import styled from "styled-components";

const StyledInput = styled.input`
  background: url(assets/search.svg) no-repeat 5% center/1rem;
  background-color: var(--secondary-clr);
  border: 1px solid;
  border-radius: 1rem;
  box-shadow: inset 0.2rem 0.2rem 0.25rem rgb(255 255 255 / 50%), inset -3px -3px 4px rgb(0 0 0 / 25%);
  font-size: 1rem;
  height: 2rem;
  padding-left: 2rem;    
  width: 12rem;

  &::placeholder {
    text-transform: capitalize;
    font-size:1rem;
  }
}
`;

export default StyledInput;
