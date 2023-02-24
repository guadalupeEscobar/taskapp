import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context";

function TodoCounter() {
  const { totalItem, completedItem } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedItem} de {totalItem} Tasks
    </h2>
  );
}

export { TodoCounter };
