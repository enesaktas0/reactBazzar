import React from "react";
import styled from "styled-components";
import BackLink from "./BackLink";

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;
const StyledH2 = styled.h2`
  text-align: center;
`;
export default function PageHeader({ title }) {
  return (
    <StyledCartHeader>
      <BackLink to={-1}>&larr; Go to Back</BackLink>
      <StyledH2>{title}</StyledH2>
      <div></div>
    </StyledCartHeader>
  );
}
