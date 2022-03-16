import React, { useState } from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
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
        <li>
          {props.meaning.definitions[0].definition}
          <div>
            <Example data={props.meaning.definitions[0].example} />
          </div>
          <div>
            <Synonym data={props.meaning.definitions[0].synonyms} />
          </div>
          <div>
            <Antonym data={props.meaning.definitions[0].antonyms} />
          </div>
        </li>

        {isTruncated
          ? ""
          : props.meaning.definitions.map(function (index, num) {
              if (num > 0) {
                return (
                  <li key={index["defenition"]}>
                    {props.meaning.definitions[num].definition}
                    <div>
                      <Example data={props.meaning.definitions[num].example} />
                    </div>
                    <div>
                      <Synonym data={props.meaning.definitions[num].synonyms} />
                    </div>
                    <div>
                      <Antonym data={props.meaning.definitions[num].antonyms} />
                    </div>
                  </li>
                );
              }
            })}
      </ol>
    </div>
  );
}
