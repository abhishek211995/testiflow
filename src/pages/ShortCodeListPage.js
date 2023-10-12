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

        <ShortCodeTable />
      </div>
    </TfLayout>
  );
}
