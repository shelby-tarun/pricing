import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = (props) => {
  const { stubborn = false } = props;
  const [style, setStyle] = useState({
    opacity: "0",
  });

  useEffect(() => {
    setStyle({
      opacity: 1,
      transition: "all .200s ease-in-out",
    });
  }, []);

  return ReactDOM.createPortal(
    <div
      className="containerModal"
      style={style}
      onClick={() => !stubborn && props.onDismiss()}
    >
      <div
        className="containerModal__body"
        style={{ height: props.height || 300, width: props.width || 500 }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
