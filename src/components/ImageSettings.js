import React, { useState } from "react";
import ImageRadioBoxInput from "./ImageRadioBoxInput";
import SelectInput from "./SelectInput";
import ToggleSwitch  from "./ToggleSwitch";

export default function TfShortcodeImageSettings(props){ 

    const image_path = tfadminVars.admin_images_path;
    const [selectedRadioOption, setRadioOption] = useState("circle");

    const handleRadioChange = (e) => {
        console.log("in");
        setRadioOption((prev) => {
        console.log("prev", prev);
        return e.target.value;
        });
    };

    const imageModes = [
        { label: "Normal", value: "none" },
        { label: "Grayscale and normal on hover", value: "normal_on_hover" },
        { label: "Grayscale on hover", value: "on_hover" },
        { label: "Always grayscale", value: "always" },
    ];
    const [selectedImageMode, setSelectedImageMode] = useState("option1");
    const handlesetSelectedImageMode = (e) => {
        setSelectedImageMode(e.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Testimonial Image"
                        description="Show/Hide testimonial image." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
                <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-semibold leading-6 text-gray-900 mb-1">
                        Select Image Shape
                        </label>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-6 gap-x-5">
                            <ImageRadioBoxInput
                                name="tf_image_settings_layout"
                                label="Cicle"
                                value="circle"
                                imgPath={`${image_path}/circle`}
                                checked={selectedRadioOption === "circle"}
                                onChange={handleRadioChange}
                                id="circle"
                                className="w-[60%]"
                            />
                            <ImageRadioBoxInput
                                name="tf_image_settings_layout"
                                label="Rounded"
                                value="rounded"
                                imgPath={`${image_path}/rounded`}
                                checked={selectedRadioOption === "rounded"}
                                onChange={handleRadioChange}
                                id="rounded"
                                className="w-[60%]"
                            />
                            <ImageRadioBoxInput
                                name="tf_image_settings_layout"
                                label="Square"
                                value="square"
                                imgPath={`${image_path}/square`}
                                checked={selectedRadioOption === "square"}
                                onChange={handleRadioChange}
                                id="square"
                                className="w-[60%]"
                            />
                        </div>
                    </div>
                </div>
            
                <div className="grid grid-cols-1 gap-5">
                    <SelectInput 
                        label = "Image Mode"
                        description = "Select a image mode."
                        options={imageModes}
                        value={selectedImageMode}
                        onChange={handlesetSelectedImageMode}
                    />
                </div>
            </div>
        </>
    )

}