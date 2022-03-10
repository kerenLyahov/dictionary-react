import React from "react";

export default function Example(props) {
  if (props.data) {
    return <div>Example: {props.data}</div>;
  } else return null;
}
