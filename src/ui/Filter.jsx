import React from "react";
import FilterButton from "./FilterButton";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 50px auto;
  @media (min-width: 1350px) {
    gap: 60px;
  }
`;

export default function Filter({ options, fieldName }) {
  return (
    <StyledButtonContainer>
      <FilterButton name={"all"} fieldName={fieldName} value={"all"} />
      {options.map((option) => {
        const { name, id } = option;
        return (
          <FilterButton name={name} fieldName={fieldName} value={id} key={id} />
        );
      })}
    </StyledButtonContainer>
  );
}
