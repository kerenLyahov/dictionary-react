import React from "react";
import "./Antonym.css";
export default function Antonym(props) {
  if (props.data.length !== 0) {
    return (
      <div className="antonym-body">
        <span className="antonym-list">Antonyms</span> :
        {props.data.map(function (index, num) {
          return (
            <span className="antonym" key={index["antonym"]}>
              {props.data[num]}
            </span>
          );
        })}
      </div>
    );
  } else return null;
}
