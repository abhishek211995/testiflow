import React from "react";

export default function TextInput(props) {
  return (
    <div className="input-container grid grid-cols-4 gap-4">
      {props.label ? (
        <div className="col-span-1">
          <label className="block text-sm font-semibold leading-6 text-gray-900 mb-1">
            {props.label}
          </label>
          <small>{props.description}</small>
        </div>
      ) : (
        ""
      )}
      <div className="col-span-3">
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="tf_input"
        />
      </div>
    </div>
  );
}
