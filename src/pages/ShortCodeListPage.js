import React, { useState } from "react";
import TfButton from "../components/Button";
import TfLayout from "../layouts/Layout";
import ShortCodeTable from "../components/ShortcodesTable";

export default function ShortCodeListPage() {
  const [loading, isLoading] = useState(false);

  return (
    <TfLayout>
      <div className="tf_container">
        <div className="tf_page_intro_wrap">
          <h3>Shortcodes</h3>
          <p>Add and Edit your shortcodes here with easy to use interface.</p>
          <TfButton
            onClick={() => console.log("clicked")}
            type="button"
            id="countBtn"
            isLoading={loading}
          >
            <span class="dashicons dashicons-plus-alt2"></span> Generate New
            Shortcode
          </TfButton>

          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <ShortCodeTable />
      </div>
    </TfLayout>
  );
}
