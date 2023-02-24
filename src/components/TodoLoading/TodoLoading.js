import React from "react";
import "./TodoLoading.css";
import loading from "./loading.svg";

function TodoLoading() {
  return (
    <div className="container_loading">
      <div className="dot_container">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      <img src={loading} alt="Loading" className="img_loading"></img>
    </div>
  );
}

export { TodoLoading };
