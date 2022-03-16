import React from "react";
import "./Synonym.css";
export default function Synonym(props) {
  if (props.data.length !== 0) {
    return (
      <div className="synonym-body">
        <span className="synonym-list">Synonyms</span> :
        {props.data.map(function (index, num) {
          return (
            <span className="synonym" key={index["synonym"]}>
              {props.data[num]}
            </span>
          );
        })}
      </div>
    );
  } else return null;
}
