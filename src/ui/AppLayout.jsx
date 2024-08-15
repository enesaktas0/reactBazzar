import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useBasket } from "../contexts/UserReducer";
import Modal from "./Modal";
import SelectedProducts from "../features/product/SelectedProducts";
import CardDash from "./CardDash";

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-100);
`;

const StyledMain = styled.main``;

export default function AppLayout() {
  const { dispatch, isShowModal, getTotalQuantity } = useBasket();

  const totalQuantity = getTotalQuantity();

  const onClose = () => {
    dispatch({ type: "setIsShowModal/False" });
    dispatch({ type: "setProductId", payload: null });
  };

  return (
    <StyledAppLayout>
      <Header />
      <NavBar />
      <StyledMain>
        <Outlet />
        {isShowModal ? (
          <Modal onClose={onClose} title={"it is working"}>
            <SelectedProducts />
          </Modal>
        ) : null}
        {totalQuantity ? <CardDash /> : null}
      </StyledMain>
      <Footer />
    </StyledAppLayout>
  );
}
