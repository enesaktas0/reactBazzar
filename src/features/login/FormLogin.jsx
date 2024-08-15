import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";

import { useLogin } from "../../hooks/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useForm } from "react-hook-form";
import { useBasket } from "../../contexts/UserReducer";

const Form = styled.form`
  width: 100%;
`;

export default function FormLogin() {
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useBasket();

  const { login, status, data: userData } = useLogin();

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (status === "pending") setIsLoading(true);
    else {
      userData &&
        dispatch({ type: "setUserInfo", payload: userData.user.user_metadata });
      setIsLoading(false);
    }
  }, [status, dispatch, userData]);

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!email || !password) return;
    login({ email, password });

    reset();
  };

  const onError = (error) => {
    setError(error);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label="Email"
        type="login"
        error={error.email ? error.email.message : null}
      >
        <Input
          type="text"
          id="email"
          place="login"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Password"
        type="login"
        error={error.password ? error.password.message : null}
      >
        <Input
          type="password"
          id="email"
          place="login"
          {...register("password", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />
      </FormRow>
      <ButtonGroup type="login" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Log in"}
      </ButtonGroup>
    </Form>
  );
}
