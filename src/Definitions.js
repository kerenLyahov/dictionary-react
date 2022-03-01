import React, { useEffect } from "react";
import useCollapse from "react-collapsed";
import "./Definitions.css";
export default function Definitions(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  let defenitionNumber = props.partOfSpeech.length;
  let lenght = [];
  for (let i = 0; i < defenitionNumber; i++) {
    lenght.push(i);
  }
  let definitions = props.data;
  return (
    <div id="definition">
      <div>
        {props.partOfSpeech} <span>({defenitionNumber})</span>
      </div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? "click on me to collapse" : `+ 1.${definitions[0]}`}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <ol className="content">
              {lenght.map((i) => {
                return <li key={i}>{definitions[i]}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
