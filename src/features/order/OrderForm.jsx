import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";
import Input from "../../ui/Input";
import ButtonGroup from "../../ui/ButtonGroup";
import { useBasket } from "../../contexts/UserReducer";
import { createOrder } from "../../services/apiCreateOrder";
import { useNavigate } from "react-router-dom";
import useIdCreater from "../../hooks/useIdCreater";
import toast from "react-hot-toast";

const Form = styled.form`
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 50px;
`;

export default function OrderForm() {
  const [code, setCode] = useState("");
  const [count, setCount] = useState(0);
  const [error, setError] = useState(0);

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const { basket, dispatch, getTotalPrice, userInfo, userName } = useBasket();

  const productsPrice = getTotalPrice();

  useEffect(() => {
    setCode(useIdCreater);
  }, [count, setCode]);

  const onSubmit = (data) => {
    setCount(() => count + 1);
    createOrder({ data, basket, code, productsPrice });
    reset();
    dispatch({ type: "resetBasket" });
    navigate(`/order/${code}`);
    toast.success("Your order has been successfully received.");
    setError({});
  };

  const onError = (error) => {
    setError(error);
  };

  console.log(userInfo);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label="Full Name"
        type="order"
        error={error.userName ? error.userName.message : null}
      >
        <Input
          type="text"
          {...register("userName", {
            required: "This field is required",
          })}
          id="userName"
          value={userName ? userName : userInfo.fullName}
          onChange={(e) =>
            dispatch({ type: "setUserName", payload: e.target.value })
          }
        />
      </FormRow>
      <FormRow
        label="Phone"
        type="order"
        error={error.phone ? error.phone.message : null}
      >
        <Input
          type="text"
          {...register("phone", {
            required: "This field is required",
            pattern: {
              value: /^[0-9]+$/,
              message:
                "Please give us your correct phone number, We might need it to contect you",
            },
          })}
          id="phone"
        />
      </FormRow>
      <FormRow
        label="Address"
        type="order"
        error={error.address ? error.address.message : null}
      >
        <Input
          type="text"
          {...register("address", {
            required: "This field is required",
          })}
          id="address"
        />
      </FormRow>
      <ButtonGroup type="order">Complate Order</ButtonGroup>
    </Form>
  );
}
