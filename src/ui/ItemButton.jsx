import React, { useEffect, useState } from "react";
import { useBasket } from "../contexts/UserReducer";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 5px;
`;

const StyledIncDec = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: var(--color-blue-400);
  color: var(--color-grey-0);
  border: none;
  border-radius: 10px;
  transition: transform 0.5s ease;
  padding: 5px 5px;

  &:hover {
    transform: scale(1.2);
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.type === "secadary" &&
    css`
      width: 25px;
    `}
    ${(props) =>
    props.type === "delete" &&
    css`
      width: auto;
    `}
    ${(props) =>
    props.place === "selected" &&
    css`
      max-width: 20rem;
    `}
`;

export default function ItemButton({ item, place = "" }) {
  const [isIn, setIsIn] = useState(false);

  const { pathname } = useLocation();

  const [currQuantatiy, setCurrQuantatiy] = useState(0);

  const { basket, getCurrQuantity, dispatch } = useBasket();

  useEffect(() => {
    setCurrQuantatiy(getCurrQuantity(item.id));
  }, [getCurrQuantity, item.id, basket]);

  useEffect(() => {
    if (currQuantatiy) setIsIn(true);
    else setIsIn(false);
  }, [currQuantatiy]);

  return (
    <>
      {isIn ? (
        <StyledButtonContainer>
          <StyledIncDec>
            <StyledButton
              place={place}
              type="secadary"
              onClick={() => {
                dispatch({ type: "decrease/product", payload: item.id });
                if (currQuantatiy === 1)
                  toast.success("Product successfully deleted from cart");
              }}
            >
              -
            </StyledButton>
            <p>{currQuantatiy}</p>
            <StyledButton
              type="secadary"
              onClick={() => {
                dispatch({ type: "increase/product", payload: item.id });
              }}
            >
              +
            </StyledButton>
          </StyledIncDec>
          {place === "cart" ? null : (
            <StyledButton
              type="delete"
              onClick={() => {
                dispatch({ type: "delete/product", payload: item.id });
                toast.success("Product successfully deleted from cart");
              }}
            >
              Delete
            </StyledButton>
          )}
        </StyledButtonContainer>
      ) : pathname === "/basket" || pathname === "/order/new" ? null : (
        <StyledButton
          type="primary"
          place={place}
          onClick={() => {
            const newProduct = { ...item, piece: 1, productPrice: item.price };
            dispatch({ type: "add/product", payload: newProduct });
            toast.success("Product added your cart succussfuly");
          }}
        >
          Add to Card
        </StyledButton>
      )}
    </>
  );
}
