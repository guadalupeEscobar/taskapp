import React from "react";
import "./CreateTodoButton.css";
import button from "./button.svg";
import { BiPlus } from "react-icons/bi";

function CreateTodoButton(props) {
  const ModalOverlay = document.querySelector(".ModalOverlay");
  const onClickButton = () => {
    props.setOpenModal(true);
    ModalOverlay.classList.remove("hidden");
  };
  return (
    <div className="ConteinerButton">
      <button className="CreateTodoButton" onClick={onClickButton}>
        <BiPlus className="IconAdd"></BiPlus>
      </button>
      <img src={button} alt="Add" className="CreateTodoImg"></img>
    </div>
  );
}

export { CreateTodoButton };
