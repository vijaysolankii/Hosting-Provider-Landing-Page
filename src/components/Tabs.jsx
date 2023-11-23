import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const buttons = children.map((item, index) => (
    <button
      key={index}
      className={`tab ${selected === index ? "selected" : ""}`}
      onClick={() => setSelected(index)}
    >
      {item.props.title}
    </button>
  ));
  const content = (
    <div className="container">{children[selected].props.children}</div>
  );
  return [buttons, content];
};

export default Tabs;
