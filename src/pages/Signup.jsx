import React from "react";
import styled from "styled-components";
import Logo from "../ui/Logo";
import FormSignup from "../features/singup/FormSignup";
import OtherButtons from "../features/login/OtherButtons";

const SingupContainer = styled.div`
  background-image: url("/joshua-fuller-_hjW7R_YoYo-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SingupMainContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-600);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledH4 = styled.h4`
  text-align: center;
  margin: 0 0 10px 0;
`;
export default function Signup() {
  return (
    <SingupContainer>
      <SingupMainContainer>
        <Logo type={"login"} />
        <StyledH4>Create Your Account</StyledH4>
        <FormSignup />
        <OtherButtons type="singup" />
      </SingupMainContainer>
    </SingupContainer>
  );
}
