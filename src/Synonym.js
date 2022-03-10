import React from "react";
import "./Synonym.css";
export default function Synonym(props) {
  if (props.data.length != 0) {
    return (
      <div className="body">
        <span className="synonyms">Synonyms: </span>
        <ul>
          {props.data.map(function (index, num) {
            return <li key={index}>{props.data[num]}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
