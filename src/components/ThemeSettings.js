import React, { useState } from "react";
import ImageRadioBoxInput from "./ImageRadioBoxInput";
import PageIntro from "./Layouts/PageIntro";

export default function TfThemeSettings(props) {
  const ImagePath = tfadminVars.admin_images_path;

  return (
    <div>
      <PageIntro
        title="Theme Settings"
        description="Select a theme which you want to display. Please note: To get perfect view for some themes, you need to customize few settings below"
      />
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <ImageRadioBoxInput
            label="theme1"
            value="theme1"
            className="w-[90%]"
            imgPath={`${ImagePath}1.svg`}
            name="tf_theme"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme2"
            value="theme2"
            className="w-[90%]"
            imgPath={`${ImagePath}1.svg`}
            name="tf_theme"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme3"
            value="theme3"
            className="w-[90%]"
            imgPath={`${ImagePath}1.svg`}
            name="tf_theme"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme4"
            value="theme4"
            className="w-[90%]"
            imgPath={`${ImagePath}1.svg`}
            name="tf_theme"
          />
        </div>
      </div>
    </div>
  );
}
