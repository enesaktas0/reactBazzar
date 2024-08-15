import React, { useState } from "react";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";

import SpinnerMini from "../../ui/SpinnerMini";
import { useSingup } from "../../hooks/useSingup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  width: 100%;
`;

export default function FormSignup() {
  const navigate = useNavigate();
  const { singup, isLoading } = useSingup();
  const [error, setError] = useState({});
  const { handleSubmit, register, reset, getValues } = useForm();

  const onSubmit = ({ fullName, email, password }) => {
    setError({});
    navigate("/login");

    singup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  };

  const onError = (error) => {
    setError(error);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label="Full Name"
        type="login"
        error={error.fullName ? error.fullName.message : null}
      >
        <Input
          type="text"
          id="fullName"
          place="login"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Email"
        type="login"
        error={error.email ? error.email.message : null}
      >
        <Input
          type="text"
          id="email"
          place="login"
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
          id="password"
          place="login"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, and one number",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Repeat Password"
        type="login"
        error={error.rePassword ? error.rePassword.message : null}
      >
        <Input
          type="password"
          id="repassword"
          place="login"
          {...register("rePassword", {
            validate: (value) =>
              getValues().password === value || "Passwords do not match",
          })}
        />
      </FormRow>
      <ButtonGroup type="login">Singup</ButtonGroup>
    </Form>
  );
}
