import React from "react";
import { useProducts } from "../../hooks/useProducts";
import styled from "styled-components";

import { useBasket } from "../../contexts/UserReducer";
import ItemButton from "../../ui/ItemButton";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

const StyledProductConatainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  width: 25rem;
  @media (max-width: 1350px) {
    display: block;
    margin: 0 auto;
  }
`;

const ProductMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1350px) {
    gap: 20px;
  }
`;

const StyledDetailContainer = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledProductHeader = styled.h3`
  text-transform: capitalize;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyeledPriceP = styled.h6`
  color: #06b6d4;
  font-size: 25px;
`;

const StyledDescription = styled.p``;
export default function SelectedProducts() {
  const { productId } = useBasket();

  const { id: pageId } = useParams();

  const id = pageId ? pageId : productId;

  const { products, isLoading } = useProducts();

  if (isLoading) return null;

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return null;

  const { name, image, description, price } = product;

  return (
    <StyledProductConatainer>
      <StyledImage src={image} alt="name" />
      <ProductMainDiv>
        <StyledDetailContainer>
          <StyledProductHeader>{name}</StyledProductHeader>
          {description && <StyledDescription>{description}</StyledDescription>}
        </StyledDetailContainer>
        <StyledButtonContainer>
          <StyeledPriceP>{formatCurrency(price)}</StyeledPriceP>
          <ItemButton item={product} place={"selected"} />
        </StyledButtonContainer>
      </ProductMainDiv>
    </StyledProductConatainer>
  );
}
