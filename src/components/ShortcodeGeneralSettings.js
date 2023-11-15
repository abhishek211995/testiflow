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
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];

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
                id="slider"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="Grid"
                value="grid"
                imgPath={`${image_path}/grid`}
                id="grid"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="List"
                value="list"
                imgPath={`${image_path}/list`}
                id="list"
                className="w-[90%]"
              />
              <ImageRadioBoxInput
                name="tf_general_settings_layout"
                label="Masonary"
                value="masonary"
                imgPath={`${image_path}/masonry`}
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
            name="tf_filter_testimonial"
            description="Select an option to display the testimonials"
          />
          <TextInput
            type="text"
            name="tf_limit"
            placeholder="Limit"
            label="Limit"
            description="Limit number of testimonials to show. Leave it empty to show all testimonials"
          />
          <SelectInput
            label="Orderby:"
            options={orderby_settings}
            description="Select an order by option"
            name="tf_order_by"
          />
          <SelectInput
            label="Order:"
            options={order_settings}
            description="Select an order option"
            name="tf_order"
          />
          <SelectInput
            label="Desktop Columns:"
            options={cols_settings}
            description="Set number of column(s) in desktop view."
            name="tf_desktop_cols"
          />
          <SelectInput
            label="Tablet Columns:"
            options={cols_settings}
            description="Set number of column(s) in Tablet view."
            name="tf_tablet_cols"
          />
          <SelectInput
            label="Mobile Columns:"
            options={cols_settings}
            description="Set number of column(s) in Mobile view."
            name="tf_mobile_cols"
          />
        </div>
      </div>
    </>
  );
}
