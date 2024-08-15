import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../contexts/UserReducer";
import Logo from "../ui/Logo";
import styled from "styled-components";
import FormLogin from "../features/login/FormLogin";
import { checkLogin } from "../services/apiLogin";
import OtherButtons from "../features/login/OtherButtons";
import LoginNameForm from "../features/login/LoginNameForm";

const LoginContainer = styled.div`
  background-image: url("/tem-rysh-F6-U5fGAOik-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginMainContainer = styled.div`
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

export default function Login() {
  const { isLogin, isShowName, pathname } = useBasket();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      if (pathname === "0") navigate("/home");
      else navigate("/order/new");
    } else navigate("/login");
  }, [navigate, isLogin, pathname]);

  return (
    <LoginContainer>
      <LoginMainContainer>
        <Logo type={"login"} />

        {isShowName ? (
          <LoginNameForm />
        ) : (
          <>
            <StyledH4>Log in to your account</StyledH4>
            <FormLogin />
          </>
        )}
        <OtherButtons isShowName={isShowName} />
      </LoginMainContainer>
    </LoginContainer>
  );
}
