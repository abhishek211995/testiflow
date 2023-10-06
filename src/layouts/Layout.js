import React from "react";
import TfHeader from "../components/Layouts/Header";

export default function TfLayout(props) {
  return (
    <>
      <div className="tf_testimonial_body_wrap">
        <TfHeader />
        <div className="tf_testimonial_content_wrap">{props.children}</div>
      </div>
    </>
  );
}
