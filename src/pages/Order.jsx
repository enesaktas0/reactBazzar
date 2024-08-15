import React, { useEffect } from "react";
import OrderForm from "../features/order/OrderForm";
import PageHeader from "../ui/PageHeader";
import styled from "styled-components";
import { useBasket } from "../contexts/UserReducer";
import EmptyBasket from "../ui/EmptyBasket";
import OrderSummary from "../features/order/OrderSummary";
import { useNavigate } from "react-router-dom";

const StyledOrderContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export default function Order() {
  const navigate = useNavigate();

  const { getTotalQuantity, isLogin, dispatch, basket } = useBasket();

  const totalQuantity = getTotalQuantity();

  useEffect(() => {
    dispatch({ type: "setPathname", payload: "1" });
    if (!isLogin) navigate("/login");
  }, [isLogin]);

  if (!totalQuantity) return <EmptyBasket />;

  return (
    <StyledOrderContainer>
      <PageHeader title="Are You Ready?, Let's Go" />
      <OrderForm />
      <OrderSummary basket={basket} />
    </StyledOrderContainer>
  );
}
