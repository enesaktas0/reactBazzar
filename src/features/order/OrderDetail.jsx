import React from "react";
import styled, { css } from "styled-components";
import { useOrder } from "../../hooks/useOrder";
import Spinner from "../../ui/Spinner";
import { dateFormat, formatCurrency } from "../../utils/helpers";
import OrderSummary from "./OrderSummary";
import ErrorPage from "../../ui/ErrorPage";

const StyledOrderDetail = styled.div`
  max-width: 80rem;
  margin: 50px auto;
`;

const StyledOrderHeader = styled.h3`
  color: var(--color-grey-900);
  text-transform: uppercase;
  ${(props) =>
    props.type === "preparing" &&
    css`
      background-color: var(--color-grey-400);
      color: var(--color-grey-0);
      padding: 0.3rem 1rem;
      border-radius: 20px;
    `}
  ${(props) =>
    props.type === "shipped" &&
    css`
      background-color: var(--color-blue-400);
      color: var(--color-grey-0);
      padding: 0.3rem 1rem;
      border-radius: 20px;
    `}
    ${(props) =>
    props.type === "delivered" &&
    css`
      background-color: var(--color-green-700);
      color: var(--color-grey-0);
      padding: 0.3rem 1rem;
      border-radius: 20px;
    `}
`;

const StyledStatusContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-grey-0);
`;

const SttledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDate = styled.h3`
  color: var(--color-grey-400);
  margin: 50px 0;
`;

const OrderPriceSummary = styled.div`
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-400);
  color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 5rem;
`;

const StyledTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function OrderDetail() {
  const { order, isLoading } = useOrder();

  if (isLoading) return <Spinner />;

  if (!order[0]) return <ErrorPage />;

  const {
    code,
    status,
    estimatedDelivery,
    userCart,
    productsPrice,
    shippingCost,
  } = order[0];

  const totalPrice = productsPrice + shippingCost;

  return (
    <StyledOrderDetail>
      <SttledHeaderContainer>
        <StyledOrderHeader>Order #{code}</StyledOrderHeader>

        <StyledStatusContainer>
          <StyledOrderHeader>status: </StyledOrderHeader>
          <StyledOrderHeader type={status}>{status}</StyledOrderHeader>
        </StyledStatusContainer>
      </SttledHeaderContainer>

      <StyledDate>
        Estimated Delivery Date: {dateFormat(estimatedDelivery)}
      </StyledDate>
      <OrderSummary basket={userCart} type="order detail" />
      <OrderPriceSummary>
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
      </OrderPriceSummary>
    </StyledOrderDetail>
  );
}

StyledOrderHeader.defaultProps = {
  type: "regular",
};
