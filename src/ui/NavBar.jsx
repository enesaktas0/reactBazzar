import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-400);
  padding: 1.2rem 2.4rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 5rem;
`;

const listItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Categories", link: "/categories" },
];

export default function NavBar() {
  return (
    <StyledNav>
      <NavList>
        {listItems.map((item) => (
          <NavBarItem item={item} key={item.label} />
        ))}
      </NavList>
    </StyledNav>
  );
}
