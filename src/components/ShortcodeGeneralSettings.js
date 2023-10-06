import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import ImageRadioBoxInput from "./ImageRadioBoxInput";

export default function TfShortcodeGeneralSettings() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const image_path = tfadminVars.admin_images_path;

  const cols_settings = [
    { label: "1 Column", value: "1" },
    { label: "2 Columns", value: "2" },
    { label: "3 Columns", value: "3" },
    { label: "4 Columns", value: "4" },
  ];

  const filter_testimonial_settings = [
    { label: "Latest", value: "Latest" },
    { label: "Authors", value: "Authors" },
    { label: "Categories", value: "Categories" },
  ];

  const orderby_settings = [
    { label: "Testimonial ID", value: "ID" },
    { label: "Date", value: "date" },
    { label: "Title", value: "title" },
    { label: "Modified", value: "modified" },
  ];

  const order_settings = [
    { label: "Ascending", value: "ASC" },
    { label: "Descending", value: "DSC" },
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedRadioOption, setRadioOption] = useState("slider");

  const handleRadioChange = (e) => {
    console.log("in");
    setRadioOption((prev) => {
      console.log("prev", prev);
      return e.target.value;
    });
  };

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-5">General Settings</h3>
          <hr />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <TextInput
          type="text"
          name="tf_shortcode_name"
          onchange=""
          value=""
          placeholder="Shortcode Name"
          label="Shortcode Name"
          description="Enter Your Unique Shortcode Name"
        />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900 mb-1">
              Select Your Testimonials Layout
            </label>
            <small className="text-gray-400">
              Select a layout to display the testimonials.
            </small>
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-4 gap-x-5">
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="Slider"
                value="slider"
                imgPath={`${image_path}/slider`}
                checked={selectedRadioOption === "slider"}
                onChange={handleRadioChange}
                id="slider"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="Grid"
                value="grid"
                imgPath={`${image_path}/grid`}
                checked={selectedRadioOption === "grid"}
                onChange={handleRadioChange}
                id="grid"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="List"
                value="list"
                imgPath={`${image_path}/list`}
                checked={selectedRadioOption === "list"}
                onChange={handleRadioChange}
                id="list"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="Masonary"
                value="masonary"
                imgPath={`${image_path}/masonry`}
                checked={selectedRadioOption === "masonary"}
                onChange={handleRadioChange}
                id="masonary"
                className="w-[90%]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <SelectInput
            label="Filter Testimonials:"
            options={filter_testimonial_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Select an option to display the testimonials"
          />
          <TextInput
            type="text"
            name="tf_limit"
            onchange=""
            value=""
            placeholder="Limit"
            label="Limit"
            description="Limit number of testimonials to show. Leave it empty to show all testimonials"
          />
          <SelectInput
            label="Orderby:"
            options={orderby_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Select an order by option"
          />
          <SelectInput
            label="Order:"
            options={order_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Select an order option"
          />
          <SelectInput
            label="Desktop Columns:"
            options={cols_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Set number of column(s) in desktop view."
          />
          <SelectInput
            label="Tablet Columns:"
            options={cols_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Set number of column(s) in Tablet view."
          />
          <SelectInput
            label="Mobile Columns:"
            options={cols_settings}
            value={selectedOption}
            onChange={handleSelectChange}
            description="Set number of column(s) in Mobile view."
          />
        </div>
      </div>
    </>
  );
}
