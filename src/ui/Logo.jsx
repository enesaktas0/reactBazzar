import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLogo = styled.img`
  ${(props) =>
    props.type === "login" &&
    css`
      width: 22rem;
      text-align: center;
    `}
  ${(props) =>
    props.type === "header" &&
    css`
      width: 8rem;
      cursor: pointer;
    `}
`;

export default function Logo({ type = "" }) {
  const navigate = useNavigate();

  if (type) return <StyledLogo type={type} src="/logo.png" alt="logo" />;
  return (
    <StyledLogo src="/logo.png" alt="logo" onClick={() => navigate("/home")} />
  );
}

StyledLogo.defaultProps = {
  type: "header",
};
