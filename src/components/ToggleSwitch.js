import { useField } from "formik";
import React from "react";

export default function ToggleSwitch(props) {
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
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            {...field}
            {...props}
            checked={field.value}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {field.value ? "Yes" : "No"}
          </span>
        </label>
      </div>
    </div>
  );
}
