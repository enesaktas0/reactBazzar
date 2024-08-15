import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { useBasket } from "../contexts/UserReducer";
import SearchProducts from "./SearchProducts";
import { useNavigate } from "react-router-dom";

const StyledSearchBar = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  font-size: 16px;
  border-radius: var(--border-radius-sm);
`;

const Input = styled.input`
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0 3px;
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
`;

export default function SearchBar() {
  const [isFocus, setIsFocus] = useState(false);

  const navigate = useNavigate();

  const { dispatch, query } = useBasket();

  const handleKey = (e) => {
    if (query.includes("#")) {
      query.replaceAll("#", "");
    }
    if (e.key === "Enter") {
      if (query.length !== 5) return null;
      else {
        setIsFocus(false);
        dispatch({ type: "search", payload: "" });
        console.log("xxx");
        navigate(`/order/${query}`);
      }
    }
  };

  return (
    <StyledSearchBar
      tabIndex="0"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onKeyDown={handleKey}
    >
      <IoSearchSharp />
      <Input
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
        value={query}
        placeholder="Search Product or Order"
      />
      {isFocus && <SearchProducts setIsFocus={setIsFocus} />}
    </StyledSearchBar>
  );
}
