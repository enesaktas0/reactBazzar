import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background-color: var(--color-blue-400);
  color: white;
  border: none;
  border-radius: 10px;
  transition: transform 0.5s ease;
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
      padding: 5px 7px;
    `}
  ${(props) =>
    props.type === "secadary" &&
    css`
      padding: 0px 5px;
      width: 25px;
    `}
    ${(props) =>
    props.place === "selected" &&
    css`
      max-width: 20rem;
    `}
    ${(props) =>
    props.type === "login" &&
    css`
      width: 100%;
      padding: 5px 7px;
      background-color: var(--color-blue-700);
      margin-top: 10px;
    `}
    ${(props) =>
    props.type === "other" &&
    css`
      width: 100%;
      padding: 5px 7px;
      background-color: var(--color-blue-700);
      margin-top: 10px;
      font-size: 15px;
    `}
    ${(props) =>
    props.type === "order" &&
    css`
      width: 100%;
      padding: 5px 7px;
      &:hover {
        transform: scale(1.1);
      }
    `}
`;

export default function ButtonGroup({ type = "", to = "", children, onClick }) {
  const navigate = useNavigate();

  if (type === "primary")
    return <StyledButton onClick={() => navigate(to)}>{children}</StyledButton>;

  if (type === "login" || type === "order")
    return <StyledButton type={type}>{children}</StyledButton>;

  if (type === "other")
    return (
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    );

  return <></>;
}
