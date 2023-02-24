import React from "react";
import error from "./error.svg";
import "./TodoError.css";

function TodoError() {
  return (
    <div className="container_error">
      <img src={error} alt="Error" className="img_error"></img>
      <p className="text_error">
        Algo salió mal
        <br />
        Intenta de nuevo en unos minutos
      </p>
    </div>
  );
}

export { TodoError };
