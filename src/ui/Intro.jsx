import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledIntroContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 90vh;
  width: 100%;
  ${(props) =>
    props.type === "home" &&
    css`
      background-image: url("/pexels-andrea-piacquadio-974911.jpg");
    `}
  ${(props) =>
    props.type === "products" &&
    css`
      background-image: url("/icons8-team-7LNatQYMzm4-unsplash.jpg");
    `}
    ${(props) =>
    props.type === "categories" &&
    css`
      background-image: url("/photo-1580828342920-e99df2c56838.avif");
    `}

  @media (max-width: 900px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
    align-items: center;
  }
`;

const Header = styled.h3`
  font-size: 50px;
  margin-left: 10rem;
  color: var(--color-slate-950);

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
    margin-left: 0;
  }
`;

const Title = styled.h6`
  font-size: 40px;
  text-align: start;
  margin-left: 100px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledButton = styled(motion.button)`
  width: 100px;
  border: none;
  border-radius: var(--border-radius-sm);
  color: #fff;
  padding: 5px 8px;
  background-color: var(--color-blue-400);
  margin-left: 100px;
  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export default function Intro({ type, title, header }) {
  const navigate = useNavigate();
  return (
    <StyledIntroContainer type={type}>
      <Header>{header}</Header>
      <Title>{title}</Title>
      {type === "home" ? (
        <StyledButton
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/products")}
        >
          Shop Now
        </StyledButton>
      ) : null}
    </StyledIntroContainer>
  );
}
