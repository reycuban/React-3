import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "whitesmoke",
  fontSize: "14px",
  border: "3px solid black",
  boxShadow: "0px 4px 4px 0px"
};

const plusOne = {
  color: "red",
  boxShadow: "10px"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Web Developer</h1>
    <p stlye={plusOne}>
      This is one of the best course, i've taken so far,Angela is an amazing
      teacher
    </p>
  </div>,
  document.getElementById("root")
);
