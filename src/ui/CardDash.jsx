import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useBasket } from "../contexts/UserReducer";
import { Link, useLocation } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

const StyledCardDash = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  background-color: black;
`;

const StyledCardDashContainer = styled.div`
  display: flex;
  gap: 10px;
  color: var(--color-grey-0);
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledP = styled.div`
  display: flex;
  gap: 10px;
`;

export default function CardDash() {
  const [isShowDash, setIsShowDash] = useState(false);

  const loacation = useLocation();

  const { getTotalQuantity, getTotalPrice } = useBasket();

  const pathname = loacation.pathname;

  const totalQuantity = getTotalQuantity();

  const totalPirce = getTotalPrice();

  useEffect(() => {
    if (
      pathname === "/home" ||
      pathname === "/products" ||
      pathname === "/categories" ||
      pathname === "/"
    )
      setIsShowDash(true);
    else setIsShowDash(false);
  }, [isShowDash, pathname]);

  if (!isShowDash) return null;
  return (
    <StyledCardDash>
      <StyledCardDashContainer>
        <StyledP>
          <span>{totalQuantity} Products</span>
          <span>{formatCurrency(totalPirce)}</span>
        </StyledP>
        <Link to="/cart">Open Cart &rarr;</Link>
      </StyledCardDashContainer>
    </StyledCardDash>
  );
}
