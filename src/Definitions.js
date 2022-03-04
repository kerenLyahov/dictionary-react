import React, { useEffect } from "react";
import useCollapse from "react-collapsed";
import "./Definitions.css";
export default function Definitions(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  console.log(props.meaning.definitions);

  return (
    <div id="definition">
      <div>
        {props.meaning.partOfSpeech}{" "}
        <span>({props.meaning.definitions.length})</span>
      </div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? "click on me to collapse" : "click on me to expand"}
        </div>
        <div {...getCollapseProps()}>
          <ol className="content">
            {props.meaning.definitions.map(function (index, num) {
              return (
                <li key={index.num}>
                  {props.meaning.definitions[num].definition}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
