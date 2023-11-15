import React, { useState } from "react";
import PageIntro from "../components/Layouts/PageIntro";
import SelectInput from "../components/SelectInput";
import TextInput from "../components/TextInput";
import TfLayout from "../layouts/Layout";
import TfTabs from "../components/TfTabs";
import TfShortcodeGeneralSettings from "../components/ShortcodeGeneralSettings";
import TfShortcodeImageSettings from "../components/ImageSettings";
import TfDisplaySettings from "../components/DisplaySettings";
import TfButton from "../components/Button";
import TfThemeSettings from "../components/ThemeSettings";
import { Form, Formik, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";

export default function GenerateShortCodePage() {
  const tabs = [
    {
      id: "general-settings",
      label: "General Settings",
      icon: "dashicons-admin-generic",
      content: <TfShortcodeGeneralSettings />,
    },
    {
      id: "theme-settings",
      label: "Theme Settings",
      icon: "dashicons-admin-appearance",
      content: <TfThemeSettings />,
    },
    {
      id: "display-settings",
      label: "Display Settings",
      icon: "dashicons-admin-customizer",
      content: <TfDisplaySettings />,
    },
    {
      id: "image-settings",
      icon: "dashicons-admin-media",
      label: "Image Settings",
      content: <TfShortcodeImageSettings />,
    },
    {
      id: "slider-controls",
      label: "Slider Controls",
      icon: "dashicons-admin-settings",
      content: <PageIntro title="Test Title" />,
    },
  ];

  // const AutoSubmitToken = () => {
  //   // Grab values and submitForm from context
  //   const { values, submitForm } = useFormikContext();
  //   if (values.tf_general_settings_layout === "slider") {
  //     console.log(tabs);
  //     tabs.pop();
  //   }
  // };

  return (
    <TfLayout>
      <div className="tf_container">
        <PageIntro
          title="Generate ShortCode"
          description="Generate your shortcode here which you can use in your posts & pages"
        />
        <Formik
          initialValues={{
            tf_shortcode_name: "Untitled 1",
            tf_general_settings_layout: "grid",
            tf_filter_testimonial: "Latest",
            tf_limit: "2",
            tf_order_by: "date",
            tf_order: "desc",
            tf_desktop_cols: "3",
            tf_tablet_cols: "2",
            tf_mobile_cols: "1",
            tf_theme: "theme2",
            tf_enable_section_title: true,
            tf_enable_testimonial_title: true,
            tf_testimonial_title_html_tag: "h3",
            tf_enable_read_more: false,
            tf_enable_full_name: true,
            tf_reviewer_name_html_tag: "h4",
            tf_enable_position: true,
            tf_enable_testimonial_image: true,
            tf_image_settings_layout: "circle",
            tf_testimonial_image_mode: "none",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <TfTabs tabs={tabs} />
              <div className="flex justify-items-end gap-4">
                <TfButton
                  type="submit"
                  className="bg-violet-600 hover:bg-green-800"
                >
                  Save Settings
                </TfButton>
                <TfButton
                  type="submit"
                  className="tf_btn_outline bg-rose-500 hover:bg-rose-600"
                >
                  Go Back
                </TfButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </TfLayout>
  );
}
