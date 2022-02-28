import React, { useState } from "react";
import Definitions from "./Definitions";
import Synonym_Antonym from "./Synonym_Antonym";
import Origin from "./Origin";
import Sentence from "./Sentence";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let meaning = props.keyword.meaning[0];
  let lenght = [];
  for (let i = 0; i < meaning.lenght; i++) {
    lenght.push(i);
  }

  return (
    <div>
      {lenght.map((i) => {
        return (
          <div>
            <Definitions data={meaning[0][i]} />
            <Origin data={meaning[0][i]} />
            <Sentence data={meaning[0][i]} />
            <Pictures data={meaning[0][i]} />
            <Synonym_Antonym data={meaning[0][i]} />
          </div>
        );
      })}{" "}
    </div>
  );
}
