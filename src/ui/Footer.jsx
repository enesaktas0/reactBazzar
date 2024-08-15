import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--color-brand-900);

  margin-top: 50px;
  padding: 2rem 0 5rem 0;
`;

const StyledFooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

const FooterContent = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    align-items: start;
  }
`;

const StyledSupport = styled.div`
  color: var(--color-grey-0);
`;

const StyledHeader = styled.h1`
  color: var(--color-grey-500);
`;

const listItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Categories", link: "/categories" },
  { label: "Cart", link: "/cart" },
];

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterItem>
          <div>
            <StyledHeader>Quick Links</StyledHeader>
            <StyledFooterLinks>
              {listItems.map((item) => (
                <NavBarItem item={item} key={item.label} />
              ))}
            </StyledFooterLinks>
          </div>
        </FooterItem>
        <FooterItem>
          <div>
            <StyledHeader>Support</StyledHeader>
            <StyledSupport>
              <h3>Address:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi non
              </p>
              <h3>Email:</h3>
              <p>example@lorem.com</p>
              <h3>Phone:</h3>
              <p>123-456-78</p>
            </StyledSupport>
          </div>
        </FooterItem>
      </FooterContent>
    </StyledFooter>
  );
}
