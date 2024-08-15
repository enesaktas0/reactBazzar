import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 2.4rem;
  transition: all 2s;
  background-color: var(--color-grey-0);
  border-radius: 20px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    padding: 1rem 1.2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  width: 100%;
  height: 100dvh;
  backdrop-filter: blur(4px);
  z-index: 9999;
`;

const Button = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  border-radius: 1rem;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default function Modal({ onClose, children }) {
  const [clickedClassName, setClickedClassName] = useState("");
  if (clickedClassName.includes("overlay")) {
    onClose();
  }
  const handleClick = (event) => {
    const className = event.target.className;

    setClickedClassName(className);
  };

  return createPortal(
    <Overlay className="overlay" onClick={handleClick}>
      <StyledModal>
        <Button onClick={onClose}>
          <IoClose />
        </Button>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}
