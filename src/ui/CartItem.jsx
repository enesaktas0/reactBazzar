import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useBasket } from "../contexts/UserReducer";
import ItemButton from "./ItemButton";
import { formatCurrency } from "../utils/helpers";

const StyledCartContainer = styled.div`
  background-color: var(--color-grey-0);
  width: 370px;
  margin: 0 auto;
`;
const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-lg);
  border-radius: 7px;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledCategoryHeader = styled.h5`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  text-transform: capitalize;
`;

const StyledImage = styled.img`
  height: 240px;
`;

const StyeledPriceP = styled.h6`
  color: #06b6d4;
  font-size: 25px;
`;

const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export default function CartItem({ item, type }) {
  const navigate = useNavigate();

  const { id, name, image, price } = item;

  const { dispatch } = useBasket();

  const handleClickCategory = () => {
    navigate(`/products?category=${id}`);
  };

  const handleClickProduct = () => {
    dispatch({ type: "setIsShowModal/True" });
    dispatch({ type: "setProductId", payload: id });
  };

  return (
    <StyledCartContainer>
      <StyledCartItem
        onClick={
          type === "categories" ? handleClickCategory : handleClickProduct
        }
      >
        <StyledImage src={image} alt={`${name}`} />
        {price ? (
          <StyledProductInfo>
            <StyledCategoryHeader>{name}</StyledCategoryHeader>
            <StyeledPriceP>{formatCurrency(price)}</StyeledPriceP>
          </StyledProductInfo>
        ) : (
          <StyledCategoryHeader>{name}</StyledCategoryHeader>
        )}
      </StyledCartItem>
      {price ? <ItemButton item={item} /> : null}
    </StyledCartContainer>
  );
}
