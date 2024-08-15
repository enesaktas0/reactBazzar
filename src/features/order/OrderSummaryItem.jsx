import React from "react";
import styled from "styled-components";

const StyledItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid var(--color-grey-600);
  border-radius: var(--border-radius-md);
  padding: 2rem 3rem;
  background-color: var(--color-grey-0);
  align-self: flex-start;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 50px;
`;

const StyledP = styled.p`
  font-weight: 600;
  text-transform: capitalize;
`;

const StyledPriceP = styled.p`
  margin-left: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;

export default function OrderSummaryItem({ item }) {
  const { name, image, piece, price } = item;
  return (
    <StyledItemDiv>
      <StyledImage src={image} />
      <StyledP>{name}</StyledP>
      <p>x</p>
      <StyledP>{piece}</StyledP>
      <StyledPriceP>Price per item : $ {price}</StyledPriceP>
    </StyledItemDiv>
  );
}
