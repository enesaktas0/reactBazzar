import React from "react";
import { useProducts } from "../../hooks/useProducts";
import CartItem from "../../ui/CartItem";
import {
  StyledHomeContainer,
  StyledHomeHeader,
  StyledHomeItems,
} from "../../ui/HomePageStyles";

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";

const StyledProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 150rem;
  margin: 50px auto;
`;

const StyledCartContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function ProductsMain({ title = "" }) {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  if (!products) return <ErrorPage />;
  return (
    <>
      {title && <StyledHomeHeader>{title}</StyledHomeHeader>}
      <StyledHomeContainer>
        <StyledHomeItems>
          {products.map((product) => {
            return (
              <CartItem item={product} key={product.id} type={"products"} />
            );
          })}
        </StyledHomeItems>
      </StyledHomeContainer>
    </>
  );
}
