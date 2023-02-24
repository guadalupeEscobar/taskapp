import React from "react";
import ReactDOM from "react-dom";
import "./ModalOverlay.css";
import { TodoContext } from "../../context";

function ModalOverlay() {
  const { setOpenModal } = React.useContext(TodoContext);
  const ModalOverlay = document.querySelector(".ModalOverlay");
  const closeModal = () => {
    setOpenModal(false);
    ModalOverlay.classList.add("hidden");
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !!setOpenModal) {
      setOpenModal(false);
      ModalOverlay.classList.add("hidden");
    }
  });
  return <div className="ModalOverlay hidden" onClick={closeModal}></div>;
}

export { ModalOverlay };
