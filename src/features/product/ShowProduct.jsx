import React from "react";
import Modal from "../../ui/Modal-v2";
import SelectedProducts from "./SelectedProducts";

export default function ShowProduct() {
  return (
    <Modal>
      <Modal.Window name="product-modal">
        <SelectedProducts />
      </Modal.Window>
    </Modal>
  );
}
