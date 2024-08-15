import React from "react";
import { useBasket } from "../contexts/UserReducer";
import EmptyBasket from "../ui/EmptyBasket";
import styled from "styled-components";
import PageHeader from "../ui/PageHeader";
import BasketMain from "../features/basket/BasketMain";

const StyledBasketContainer = styled.div`
  max-width: 80rem;
  min-height: 65vh;
  margin: 5rem auto;
`;

export default function BasketPage() {
  const { getTotalQuantity } = useBasket();

  const totalQuantity = getTotalQuantity();

  if (!totalQuantity) return <EmptyBasket />;

  return (
    <StyledBasketContainer>
      <PageHeader title="Cart" />
      <BasketMain />
    </StyledBasketContainer>
  );
}
