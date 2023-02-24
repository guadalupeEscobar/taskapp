import React from "react";
import empty from "./empty.svg";
import "./TodoEmpty.css";

function TodoEmpty() {
  return (
    <div className="container_empty">
      <img src={empty} alt="Empty" className="img_empty"></img>
      <p className="text_empty">
        No hay nada pendiente
        <br />
        Crea una nueva tarea
      </p>
    </div>
  );
}

export { TodoEmpty };
