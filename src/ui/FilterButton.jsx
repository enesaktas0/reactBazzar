import React from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilterButton = styled.button`
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--color-grey-0);
  border-radius: 10px;

  &:hover {
    background-color: var(--color-indigo-700);
    color: #fff;
  }

  ${(props) =>
    props.type === "active" &&
    css`
      background-color: var(--color-indigo-700);
      color: #fff;
    `}
  ${(props) =>
    props.type === "none-active" &&
    css`
      background-color: #fff;
    `}

  &:focus {
    outline: none;
  }

  transition: all 0.6s;
`;

export default function FilterButton({ fieldName, name, value }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get(fieldName) || "all";

  const handelClick = () => {
    searchParams.set(fieldName, value);
    setSearchParams(searchParams);
  };
  return (
    <StyledFilterButton
      onClick={handelClick}
      type={query === String(value) ? "active" : "none-active"}
    >
      {name}
    </StyledFilterButton>
  );
}
