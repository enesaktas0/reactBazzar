import React from "react";
import ButtonGroup from "../../ui/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../contexts/UserReducer";

export default function OtherButtons({ type = "" }) {
  const navigate = useNavigate();

  const { dispatch, isShowName } = useBasket();

  if (type === "singup") {
    return (
      <>
        <ButtonGroup type="other" onClick={() => navigate("/login")}>
          Log in
        </ButtonGroup>
      </>
    );
  }

  if (isShowName) {
    return (
      <>
        <ButtonGroup type="other" onClick={() => navigate("/singup")}>
          Sing up
        </ButtonGroup>
        <ButtonGroup
          type="other"
          onClick={() => dispatch({ type: "noShowName" })}
        >
          Login with Your Account
        </ButtonGroup>
      </>
    );
  }
  return (
    <>
      <ButtonGroup type="other" onClick={() => navigate("/signup")}>
        Sign up
      </ButtonGroup>
      <ButtonGroup type="other" onClick={() => dispatch({ type: "showName" })}>
        Login with Name
      </ButtonGroup>
    </>
  );
}
