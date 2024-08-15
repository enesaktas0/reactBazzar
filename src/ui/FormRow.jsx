import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  ${(props) =>
    props.type === "primary" &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.type === "login" &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.type === "order" &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 740px) {
        flex-direction: column;
        align-items: start;
        width: 100%;
      }
    `}
  
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  ${(props) =>
    props.type === "primary" &&
    css`
      color: var(--color-grey-0);
    `}
  ${(props) =>
    props.type === "order" &&
    css`
      color: var(--color-grey-950);
    `}
    ${(props) =>
    props.type === "primary" &&
    css`
      color: var(--color-grey-950);
    `}
  font-weight: 500;
  white-space: nowrap;
`;

const StyledErrorDiv = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;
  justify-content: center;
  background-color: var(--color-red-100);
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  width: 100%;
`;

function FormRow({ label, error, children, type = "primary" }) {
  return (
    <div>
      <StyledFormRow type={type}>
        {label && (
          <Label type={type} htmlFor={children.props.id}>
            {label}
          </Label>
        )}
        {children}
      </StyledFormRow>
      <StyledErrorDiv>{error && <Error>{error}</Error>}</StyledErrorDiv>
    </div>
  );
}

Label.defaultProps = {
  type: "primary",
};

export default FormRow;
