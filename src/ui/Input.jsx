import styled, { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 80%;
  ${(props) =>
    props.place === "login" &&
    css`
      width: 100%;
    `}
  @media (max-width: 740px) {
    width: 100%;
  }
`;

export default Input;
