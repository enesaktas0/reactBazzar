import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsBasket2Fill } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../contexts/UserReducer";
import ButtonGroup from "./ButtonGroup";

const StyledHeaderIcons = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 30px;
  align-items: center;
`;

const StyledIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledPiece = styled.div`
  position: absolute;
  background-color: white;
  top: 2px;
  right: 3px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const StyledPieceP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HeaderIcons() {
  const navigate = useNavigate();

  const { isLogin } = useBasket();

  const { getTotalQuantity } = useBasket();

  const totalQuantity = getTotalQuantity();

  return (
    <StyledHeaderIcons>
      <StyledIcon onClick={() => navigate("cart")}>
        <StyledPiece>
          <StyledPieceP>{totalQuantity}</StyledPieceP>
        </StyledPiece>
        <BsBasket2Fill />
      </StyledIcon>
      <StyledIcon>
        {isLogin ? (
          <IoPersonCircleOutline />
        ) : (
          <ButtonGroup onClick={() => navigate("/login")} type="other">
            Login
          </ButtonGroup>
        )}
      </StyledIcon>
    </StyledHeaderIcons>
  );
}
