import React from "react";
import "./Example.css";
export default function Example(props) {
  if (props.data) {
    return (
      <div className="body">
        <span className="example">Example:</span> {props.data}
      </div>
    );
  } else return null;
}
