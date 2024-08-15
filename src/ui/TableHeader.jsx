import styled from "styled-components";

const TableHeader = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  justify-content: start;
  /* align-items: center; */
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-grey-200);
  letter-spacing: 0.4rem;
  color: var(--color-grey-600);
  font-weight: 400;
  font-size: small;
  padding: 1rem 2rem;
  @media (max-width: 400px) {
    letter-spacing: 0;
  }
`;

export default TableHeader;
