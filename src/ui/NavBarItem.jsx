import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-100);
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover,
  &.active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function NavBarItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const { label, link } = item;
  return (
    <li onClick={() => setIsOpen(!isOpen)}>
      <StyledNavLink to={link}>
        <span>{label}</span>
      </StyledNavLink>
    </li>
  );
}
