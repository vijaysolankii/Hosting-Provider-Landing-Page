import React from "react";

const Button = ({ text, classes }) => {
  return <button className={`btn ${classes}`}>{text}</button>;
};

export default Button;
