import React from "react";
import styled from "styled-components";
import { useBasket } from "../../contexts/UserReducer";
import BasketCartItem from "./BasketCartItem";
import Table from "../../ui/Table";
import BasketSummary from "./BasketSummary";

const columns = "3fr 1fr 1fr 1fr";

const StyledBasketMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const StyledTh = styled.th`
  text-align: start;
`;

export default function BasketMain() {
  const { basket } = useBasket();

  return (
    <StyledBasketMain>
      <Table
        columns={columns}
        data={basket}
        render={(item) => {
          return <BasketCartItem item={item} columns={columns} key={item.id} />;
        }}
      >
        <StyledTh>Product Deatil</StyledTh>
        <StyledTh>Quantity</StyledTh>
        <StyledTh>Price</StyledTh>
        <StyledTh>Total</StyledTh>
      </Table>
      <BasketSummary />
    </StyledBasketMain>
  );
}
