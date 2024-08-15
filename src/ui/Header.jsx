import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderIcons from "./HeaderIcons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 150rem;
  margin: 0 auto;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <HeaderIcons />
    </HeaderContainer>
  );
}
