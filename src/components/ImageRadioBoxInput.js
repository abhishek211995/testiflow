import React, { useState } from "react";
import { useField, useFormikContext } from "formik";

export default function ImageRadioBoxInput(props) {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="tf_custom_radio relative">
      <label
        htmlFor={props.id}
        class="block w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {field.value === props.value && (
          <span class="dashicons dashicons-yes-alt absolute top-2 right-1 text-green-600"></span>
        )}
        <input
          type="radio"
          {...field}
          {...props}
          class="hidden"
          id={props.id}
        />
        <div class="block text-center">
          <img
            className={`${props.className} mx-auto`}
            src={props.imgPath}
          />
          <div class="w-full text-sm font-semibold">{props.label}</div>
        </div>
      </label>
    </div>
  );
}
