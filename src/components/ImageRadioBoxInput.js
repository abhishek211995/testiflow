import React, { useState } from "react";

export default function ImageRadioBoxInput({
  label,
  name,
  value,
  checked,
  id,
  onChange,
  imgPath,
  className,
}) {
  return (
    <div className="tf_custom_radio relative">
      <label
        htmlFor={id}
        class="block w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {checked && (
          <span class="dashicons dashicons-yes-alt absolute top-2 right-1 text-green-600"></span>
        )}
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          class="hidden"
          id={id}
        />
        <div class="block text-center">
          <img
            className={`${className} mx-auto`}
            src={imgPath}
          />
          <div class="w-full text-sm font-semibold">{label}</div>
        </div>
      </label>
    </div>
  );
}
