import React from "react";
import "./Antonym.css";
export default function Antonym(props) {
  if (props.data.length !== 0) {
    return (
      <div className="body">
        <span className="antonym">Antonyms:</span>
        <ul>
          {props.data.map(function (index, num) {
            return <li key={index}>{props.data[num]}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
