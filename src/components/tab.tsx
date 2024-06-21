import React, { useState } from "react";

type Props = {
  tabs: string[];
  tabChild: React.ReactNode[];
};

export const Tabs = ({ tabs, tabChild }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-[90%]">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
        {tabs.map((item, idx) => (
          <li className="me-2">
            <div
              key={idx}
              onClick={() => setCurrentTab(idx)}
              className={`inline-block cursor-pointer duration-200 p-4 ${
                currentTab === idx
                  ? "text-blue-600"
                  : "text-gray-300 hover:text-blue-600/70"
              }  bg-gray-100 rounded-t-lg`}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>

      {tabChild[currentTab]}
    </div>
  );
};
