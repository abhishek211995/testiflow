import React from "react";

export default function TfButton(props) {
  return (
    <button
      type={props.type}
      className={`tf_button ${props.className ? props.className : ""}`}
      disabled={props.isLoading}
      id={props.id}
      onClick={props.onClick}
    >
      {props.isLoading ? "Loading..." : props.children}
    </button>
  );
}
