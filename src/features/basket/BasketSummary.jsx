import React from "react";
import styled from "styled-components";
import { useBasket } from "../../contexts/UserReducer";
import ButtonGroup from "../../ui/ButtonGroup";
import { formatCurrency } from "../../utils/helpers";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--color-grey-200);
  align-self: flex-start;
  padding: 1rem 2rem;
  background-color: var(--color-grey-0);
  width: 200px;
  border-radius: var(--border-radius-md);
  @media (max-width: 740px) {
    width: 100%;
  }
`;

const StyledTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function BasketSummary({ type = "" }) {
  const { getTotalPrice } = useBasket();

  const productsPrice = getTotalPrice();

  const shippingCost = productsPrice < 100 ? 10 : 0;

  const totalPrice = productsPrice + shippingCost;

  return (
    <StyledSummary type={type}>
      <h3>Summary</h3>
      <StyledTotalContainer>
        <p>Cart:</p>
        <p>{formatCurrency(productsPrice)} </p>
      </StyledTotalContainer>
      <StyledTotalContainer>
        <p>Shipping:</p>
        <p>{formatCurrency(shippingCost)} </p>
      </StyledTotalContainer>
      <StyledTotalContainer>
        <h4>Total:</h4>
        <h4>{formatCurrency(totalPrice)} </h4>
      </StyledTotalContainer>
      {type === "" ? (
        <ButtonGroup type="primary" to={"/order/new"}>
          Pay Now
        </ButtonGroup>
      ) : null}
    </StyledSummary>
  );
}
