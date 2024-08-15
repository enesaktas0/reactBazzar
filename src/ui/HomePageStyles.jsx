import styled from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 150rem;
  margin: 50px auto;

  @media (max-width: 480px) {
    margin: 10px auto;
  }
`;

const StyledHomeHeader = styled.h4`
  font-size: 30px;
  text-align: center;
`;

const StyledHomeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledHomeHeader, StyledHomeContainer, StyledHomeItems };
