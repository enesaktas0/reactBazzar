import React from "react";
import styled from "styled-components";

const StyledErrorHeader = styled.h3`
  margin-top: 50px;
  text-align: center;
`;

export default function ErrorPage() {
  return (
    <StyledErrorHeader>
      Something went wrong! Please Check your internet connection
    </StyledErrorHeader>
  );
}
