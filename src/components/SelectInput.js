import React from "react";

export default function SelectInput(props) {
  return (
    <div className="select-input grid grid-cols-4">
      <div className="col-span-1">
        <label className="block text-sm font-semibold leading-6 text-gray-900 mb-1">
          {props.label}
        </label>
        <small>{props.description}</small>
      </div>
      <div className="col-span-3">
        <select
          className="tf_select_input w-full"
          value={props.value}
          onChange={props.onChange}
        >
          <option value="">Select an Option</option>
          {props.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
