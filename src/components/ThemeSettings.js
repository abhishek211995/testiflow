import React, { useState } from "react";
import ImageRadioBoxInput from "./ImageRadioBoxInput";
import PageIntro from "./Layouts/PageIntro";

export default function TfThemeSettings(props) {
  const [selectedRadioOption, setRadioOption] = useState("theme1");

  const handleRadioChange = (e) => {
    console.log("in");
    setRadioOption((prev) => {
      console.log("prev", prev);
      return e.target.value;
    });
  };
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
            checked={selectedRadioOption === "theme1"}
            className="w-[90%]"
            onChange={handleRadioChange}
            imgPath="http://localhost:1010/store-apps/wp-content/plugins/testimonial-free/src/Admin/Views/Framework/assets/images/1.svg"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme2"
            value="theme2"
            className="w-[90%]"
            checked={selectedRadioOption === "theme2"}
            onChange={handleRadioChange}
            imgPath="http://localhost:1010/store-apps/wp-content/plugins/testimonial-free/src/Admin/Views/Framework/assets/images/1.svg"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme3"
            value="theme3"
            className="w-[90%]"
            checked={selectedRadioOption === "theme3"}
            onChange={handleRadioChange}
            imgPath="http://localhost:1010/store-apps/wp-content/plugins/testimonial-free/src/Admin/Views/Framework/assets/images/1.svg"
          />
        </div>
        <div className="">
          <ImageRadioBoxInput
            label="theme4"
            value="theme4"
            className="w-[90%]"
            checked={selectedRadioOption === "theme4"}
            onChange={handleRadioChange}
            imgPath="http://localhost:1010/store-apps/wp-content/plugins/testimonial-free/src/Admin/Views/Framework/assets/images/1.svg"
          />
        </div>
      </div>
    </div>
  );
}
