import React, { useState } from "react";
import "./style.css";

const Card = ({ children, title, tab1, tab2, name, page }) => {
  return (
    <div className="card">
      <div className="title">
        {title} {name}
      </div>
      <div className="content">{children}</div>
      <div className="selector">
        <div
          onClick={tab1}
          className="option"
          style={page === 1 ? { color: "white" } : null}
        >
          Zenit
        </div>
        <div
          onClick={tab2}
          className="option"
          style={page === 2 ? { color: "white" } : null}
        >
          ROT-13
        </div>
      </div>
    </div>
  );
};

export default Card;
