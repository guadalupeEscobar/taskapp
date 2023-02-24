import React from "react";
import "./TodoHide.css";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { TodoContext } from "../../context";

function TodoHide() {
  const { hideTodo, setHideTodo } = React.useContext(TodoContext);

  const onClick = () => {
    setHideTodo((prevState) => !prevState);
  };

  return (
    <button className="TodoHide" onClick={onClick}>
      {" "}
      {hideTodo ? "Show" : "Hide"} completed tasks
      {hideTodo ? (
        <BiShowAlt className="Icon Icon-show" onClick={onClick} />
      ) : (
        <BiHide className="Icon Icon-hide" onClick={onClick} />
      )}
    </button>
  );
}

export { TodoHide };
