import React, { useState } from "react";
import PageIntro from "../components/Layouts/PageIntro";
import SelectInput from "../components/SelectInput";
import TextInput from "../components/TextInput";
import TfLayout from "../layouts/Layout";
import TfTabs from "../components/TfTabs";
import TfShortcodeGeneralSettings from "../components/ShortcodeGeneralSettings";
import TfShortcodeImageSettings from "../components/ImageSettings";
import TfButton from "../components/Button";
import TfThemeSettings from "../components/ThemeSettings";

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
      content: <p>Content for Tab 3</p>,
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

  return (
    <TfLayout>
      <div className="tf_container">
        <PageIntro
          title="Generate ShortCode"
          description="Generate your shortcode here which you can use in your posts & pages"
        />
        <form>
          <TfTabs tabs={tabs} />
          <div className="flex justify-items-end gap-4">
            <TfButton>Save Settings</TfButton>
            <TfButton
              type="submit"
              className="tf_btn_outline"
            >
              Go Back
            </TfButton>
          </div>
        </form>
      </div>
    </TfLayout>
  );
}
