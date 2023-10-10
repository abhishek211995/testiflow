import React, { useState } from 'react';
import SelectInput from "./SelectInput";
import ToggleSwitch  from "./ToggleSwitch";
import PageIntro from "./Layouts/PageIntro";

export default function TfDisplaySettings(props){
    const htmlTags = [
        { label: "h1", value: "h1" },
        { label: "h2", value: "h2" },
        { label: "h3", value: "h3" },
        { label: "h4", value: "h4" },
        { label: "h5", value: "h5" },
        { label: "h6", value: "h6" },
    ];
    const [selectedHtmlTags, setSelectedHtmlTags] = useState("H1");
    const handlesetSelectedHtmlTags = (e) => {
        setSelectedHtmlTags(e.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-1 gap-5">
                <PageIntro
                    title="Testimonial Content"
                />
                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Section Title"
                        description="Show/Hide the testimonial section title." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Testimonial Title"
                        description="Show/Hide the testimonial section title." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <SelectInput 
                        label = "HTML Tag"
                        description = "Select testimonial title HTML tag."
                        options={htmlTags}
                        value={selectedHtmlTags}
                        onChange={handlesetSelectedHtmlTags}
                    />
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Read More"
                        description="Show/Hide testimonial read more button." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-5">
                <PageIntro
                    title="Reviewer Information"
                />
                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Full Name"
                        description="Show/Hide reviewer full name." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
                
                <div className="grid grid-cols-1 gap-5">
                    <SelectInput 
                        label = "HTML Tag"
                        description = "Select reviewer name HTML tag."
                        options={htmlTags}
                        value={selectedHtmlTags}
                        onChange={handlesetSelectedHtmlTags}
                    />
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <ToggleSwitch 
                        label="Identity or Position"
                        description="Show/Hide identity or position." 
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
            </div>
        </>
    )
}
