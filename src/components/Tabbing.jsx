import React, { useState } from "react";

const Tabbing = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0].title);
  return (
    <div className="support-item">
      {/* Title Itration */}
      <div className="support-item__title">
        {data.map((item, _) => (
          <div key={_}>
            <h3
              className={`cursor-pointer p-4 ${
                activeTab === item.title ? "active" : ""
              }`}
              onClick={() => setActiveTab(item.title)}
            >
              {item.title}
            </h3>
            <div className="mobileContent lg:hidden block support-item__content">
              <ul key={_} className={`${ activeTab === item.title ? "" : "hidden" }`}>
                {item.item.map((tabItem,_) => <li key={_}>{tabItem}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Content Itration */}
      <div className={`support-item__content lg:inline-flex hidden`} >
        {data.map((tabs, _) => (
            <ul key={_} className={`${ activeTab === tabs.title ? "" : "hidden" } `}>
              {tabs.item.map((tabItem,_) => <li key={_}>{tabItem}</li>)}
            </ul>
        ))}
      </div>
    </div>
  );
};

export default Tabbing;
