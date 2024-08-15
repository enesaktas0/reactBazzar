import React from "react";
import styled from "styled-components";
import ItemButton from "../../ui/ItemButton";
import { formatCurrency } from "../../utils/helpers";

const TableRow = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;

  padding: 1.4rem 2.4rem;
  background-color: var(--color-grey-0);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const StyledImage = styled.img`
  width: 50px;
`;

const StyledDetailTd = styled.td`
  display: flex;
  gap: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const StyledTd = styled.td`
  text-align: center;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

const StyledP = styled.p`
  text-transform: capitalize;
  font-weight: 600;
`;

export default function BasketCartItem({ item, columns }) {
  const { name, image, id, price, productPrice } = item;
  return (
    <TableRow columns={columns}>
      <StyledDetailTd>
        <StyledImage src={image} alt={name} />
        <div>
          <StyledP>{name}</StyledP>
          <p>id: {id}</p>
        </div>
      </StyledDetailTd>
      <td>
        <ItemButton item={item} place={"cart"} />
      </td>
      <StyledTd>{formatCurrency(price)}</StyledTd>
      <StyledTd>{formatCurrency(productPrice)}</StyledTd>
    </TableRow>
  );
}
