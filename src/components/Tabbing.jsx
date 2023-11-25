import React, { useState } from "react";

const Tabbing = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0].title);
  return (
    <div className="support-item">
      {/* Title Itration */}
      <div className="support-item__title">
        {data.map((item, _) => (
          <h3
            key={_}
            className={`cursor-pointer p-4 ${
              activeTab === item.title ? "active" : ""
            }`}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </h3>
        ))}
      </div>

      {/* Content Itration */}
      <div className={`support-item__content`} >
        {data.map((tabs, _) => (
            <ul key={_} className={`${ activeTab === tabs.title ? "" : "hidden" }`}>
              {tabs.item.map((tabItem,_) => <li key={_}>{tabItem}</li>)}
              
            </ul>
        ))}
      </div>
    </div>
  );
};

export default Tabbing;
