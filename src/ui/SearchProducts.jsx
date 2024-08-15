import React from "react";
import { useSearchBar } from "../hooks/useSearchBar";
import styled from "styled-components";
import SearchedItem from "./SearchedItem";
import Spinner from "./Spinner";

const StyledSearachContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  top: 4rem;
  left: 0;
  padding: 2rem 0rem;
  background-color: var(--color-grey-0);
  @media (max-width: 500px) {
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 10rem;
    left: 0;
    z-index: 1;
    overflow: auto;
  }
`;

export default function SearchProducts({ setIsFocus }) {
  const { products, isLoading } = useSearchBar();

  if (isLoading)
    return (
      <StyledSearachContainer>
        <Spinner />
      </StyledSearachContainer>
    );

  return (
    <StyledSearachContainer>
      {products?.map((item) => {
        return <SearchedItem item={item} setIsFocus={setIsFocus} />;
      })}
    </StyledSearachContainer>
  );
}
