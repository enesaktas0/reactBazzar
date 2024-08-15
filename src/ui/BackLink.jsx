import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.p`
  display: inline-block;
  position: relative;
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function BackLink({ children, to }) {
  return (
    <Link to={to}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
}
