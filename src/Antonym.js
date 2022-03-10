import React from "react";

export default function Antonym(props) {
  if (props.data.length != 0) {
    return (
      <div>
        Antonyms:
        <ul>
          {props.data.map(function (index, num) {
            return <li key={index}>{props.data[num]}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
