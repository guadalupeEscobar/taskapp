import React from "react";
import "./TodoForm.css";
import add from "./add.svg";
import { TodoContext } from "../../context";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const ModalOverlay = document.querySelector(".ModalOverlay");

  const onCancel = () => {
    setOpenModal(false);
    ModalOverlay.classList.add("hidden");
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    ModalOverlay.classList.add("hidden");
    setNewTodoValue("");
  };

  return (
    <form className="AddForm" onSubmit={onSubmit}>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu nuevo TODO"
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Add
        </button>
      </div>
      <img src={add} alt="Add" className="img_add"></img>
    </form>
  );
}

export { TodoForm };
