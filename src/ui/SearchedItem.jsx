import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-200);
  }
  padding: 1rem;
`;

const StyledImg = styled.img`
  width: 7rem;
`;

export default function SearchedItem({ item, setIsFocus }) {
  const navigate = useNavigate();
  const { name, image, id } = item;

  const handleClick = () => {
    navigate(`/products/${id}`);
    setIsFocus(false);
  };

  return (
    <StyledItemContainer onClick={handleClick}>
      <StyledImg src={image} alt={name} />
      <h5>{name}</h5>
    </StyledItemContainer>
  );
}
