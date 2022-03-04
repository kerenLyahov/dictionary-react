import React, { useState } from "react";

import "./Definitions.css";
export default function Definitions(props) {
  const [isTruncated, setIsTruncated] = useState(true);
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <div id="definition">
      <div>
        {props.meaning.partOfSpeech}{" "}
        <span>({props.meaning.definitions.length})</span>
      </div>
      <button id="truncated" onClick={toggleIsTruncated}>
        {isTruncated ? "Read more" : "Read less"}
      </button>
      <ol className="content">
        <li>{props.meaning.definitions[0].definition}</li>

        {isTruncated
          ? ""
          : props.meaning.definitions.map(function (index, num) {
              if (num > 0) {
                return (
                  <li key={index.num}>
                    {props.meaning.definitions[num].definition}
                  </li>
                );
              }
            })}
      </ol>
    </div>
  );
}
