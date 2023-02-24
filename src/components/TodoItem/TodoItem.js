import React from "react";
import "./TodoItem.css";
import { TodoContext } from "../../context";
import { BiTrash, BiCheckCircle, BiEdit } from "react-icons/bi";

function TodoItem(props) {
  const { hideTodo, editTodo, textEdit, setTextEdit } =
    React.useContext(TodoContext);

  const editForm = document.querySelector(".TodoEdit");

  const openForm = () => {
    editForm.classList.toggle("hideForm");
  };
  const onCancel = () => {
    editForm.classList.add("hideForm");
  };

  const onChange = (event) => {
    setTextEdit(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    editTodo(props.text, textEdit);
    setTextEdit("");
    editForm.classList.add("hideForm");
  };

  return (
    <li className={`TodoItem ${props.completed && hideTodo && "hiddenItem"}`}>
      <div className="Item">
        <BiCheckCircle
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        />
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <BiTrash className=" Icon Icon-delete" onClick={props.onDelete} />
        <BiEdit className="Icon Icon-edit" onClick={openForm} />
      </div>

      <form className="TodoEdit hideForm" onSubmit={onSubmit}>
        <textarea
          className="EditTextarea"
          value={textEdit}
          onChange={onChange}
          placeholder="Edita tu TODO"
        ></textarea>

        <div className="TodoEdit-buttonContainer">
          <button
            className="TodoEdit-button TodoEdit-button-cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className="TodoEdit-button TodoEdit-button-add" type="submit">
            Save
          </button>
        </div>
      </form>
    </li>
  );
}

export { TodoItem };
