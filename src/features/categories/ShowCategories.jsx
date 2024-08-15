import React from "react";
import { useCategories } from "../../hooks/useCategories";
import CartItem from "../../ui/CartItem";
import {
  StyledHomeContainer,
  StyledHomeHeader,
  StyledHomeItems,
} from "../../ui/HomePageStyles";
import Spinner from "../../ui/Spinner";
import ErrorPage from "../../ui/ErrorPage";

export default function ShowCategories({ title }) {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  if (!categories) return <ErrorPage />;

  return (
    <StyledHomeContainer>
      <StyledHomeHeader>{title}</StyledHomeHeader>
      <StyledHomeItems>
        {categories.map((category) => {
          return (
            <CartItem item={category} key={category.id} type="categories" />
          );
        })}
      </StyledHomeItems>
    </StyledHomeContainer>
  );
}
