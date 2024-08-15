import React from "react";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useBasket } from "../../contexts/UserReducer";

const Form = styled.form`
  width: 100%;
`;

export default function LoginNameForm() {
  const { handleSubmit, register, reset } = useForm();

  const { dispatch } = useBasket();

  const onSubmit = (data) => {
    const { name } = data;
    dispatch({ type: "setUserName", payload: name });
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" type="login">
        <Input
          type="text"
          id="name"
          place="login"
          required
          {...register("name")}
        />
      </FormRow>
      <ButtonGroup type="login">Log in wiht name</ButtonGroup>
    </Form>
  );
}
