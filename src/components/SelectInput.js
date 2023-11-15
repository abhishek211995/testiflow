import { useField } from "formik";
import React from "react";

export default function SelectInput({ ...props }) {
  const [field, meta, helpers] = useField(props);
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
          {...field}
          {...props}
        >
          <option value="">Select an Option</option>
          {props.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={field.value === props.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
}
