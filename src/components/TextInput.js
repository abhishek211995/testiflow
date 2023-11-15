import { useField } from "formik";
import React from "react";

export default function TextInput(props) {
  const [field, meta, helpers] = useField(props);
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
          {...field}
          {...props}
          className="tf_input"
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
}
