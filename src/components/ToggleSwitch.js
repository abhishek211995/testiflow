import React from "react";

export default function ToggleSwitch(props) {
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
            value="yes"
            className="sr-only peer"
            onChange={props.onChange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me.
          </span>
        </label>
      </div>
    </div>
  );
}
