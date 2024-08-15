import React from "react";
import styled from "styled-components";
import BackLink from "./BackLink";
import ProductsMain from "../features/product/ProductsMain";

const StyledEmptyPage = styled.div`
  max-width: 120rem;
  margin: 3rem auto;
`;

const StyledH3 = styled.h3`
  text-align: center;
  margin: 50px 0;
`;

export default function EmptyBasket() {
  return (
    <StyledEmptyPage>
      <BackLink to={"/products"}>&larr; Go to Products Page</BackLink>
      <StyledH3>Look at These Products!</StyledH3>
      <ProductsMain />
    </StyledEmptyPage>
  );
}
