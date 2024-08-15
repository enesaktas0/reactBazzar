import React from "react";
import styled from "styled-components";
import OrderSummaryItem from "./OrderSummaryItem";
import BasketSummary from "../basket/BasketSummary";

const StyledSummaryContainer = styled.div`
  margin-top: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;
const StyledItimDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function OrderSummary({ basket, type = "" }) {
  return (
    <StyledSummaryContainer>
      <StyledDiv>
        <StyledItimDiv>
          {basket.map((item) => {
            return <OrderSummaryItem item={item} />;
          })}
        </StyledItimDiv>
        {type === "order detail" ? null : <BasketSummary type="order" />}
      </StyledDiv>
    </StyledSummaryContainer>
  );
}
