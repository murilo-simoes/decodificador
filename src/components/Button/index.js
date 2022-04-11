import React from "react";

import "./style.css";

const Button = ({ children, click }) => {
  return <button onClick={click}>{children}</button>;
};

export default Button;
