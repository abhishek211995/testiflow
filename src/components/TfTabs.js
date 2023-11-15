import React, { useState } from "react";

const TfTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="tf_tabs">
        <ul className="hidden mb-4 text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`w-full mb-0 ${activeTab === tab.id ? "active" : ""}`}
            >
              <a
                onClick={() => handleTabClick(tab.id)}
                href="javascript:void(0)"
                className={`inline-block hover:bg-grap-200 w-full p-4 text-gray-90 focus:ring-1 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white ${
                  activeTab === tab.id
                    ? "bg-violet-700 text-white hover:text-white active:text-white"
                    : " bg-white hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className={`dashicons ${tab.icon} mr-2`}></span>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane ${
                activeTab === tab.id ? "block" : "hidden"
              }`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TfTabs;
