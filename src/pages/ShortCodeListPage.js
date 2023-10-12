import React, { useState } from "react";
import TfButton from "../components/Link";
import TfLayout from "../layouts/Layout";
import ShortCodeTable from "../components/ShortcodesTable";
import PageIntro from "../components/Layouts/PageIntro";
import TfLinkButton from "../components/Link";

export default function ShortCodeListPage() {
  const [loading, isLoading] = useState(false);
  const [inputChange, setInputChange] = useState(false);

  const handleinputchange = () => {
    setInputChange(!inputChange);
    console.log(inputChange);
  };

  return (
    <TfLayout>
      <div className="tf_container">
        <PageIntro
          title="All ShortCodes"
          description="Generate your shortcode here which you can use in your posts & pages"
        />
        <TfLinkButton
          link="/create-shortcode"
          className="mb-5"
        >
          <span class="dashicons dashicons-plus-alt2"></span> Generate New
          Shortcode
        </TfLinkButton>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={inputChange ? "yes" : "no"}
            className="sr-only peer"
            onChange={handleinputchange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>

        <ShortCodeTable />
      </div>
    </TfLayout>
  );
}
