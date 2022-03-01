import React, { useState } from "react";
import Definitions from "./Definitions";
import Synonym_Antonym from "./Synonym_Antonym";
import Origin from "./Origin";
import Sentence from "./Sentence";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let meaning = props.keyword.meaning[0];
  console.log(meaning);
  let define = [];
  let define2 = [];
  let length = [];
  for (let i = 0; i < meaning.length; i++) {
    length.push(i);
  }

  for (let j = 0; j < meaning[0].length; j++) {
    define.push(meaning[0][j].definition);
  }
  for (let j = 0; j < meaning[1].length; j++) {
    define2.push(meaning[1][j].definition);
  }

  return (
    <div>
      <Definitions
        data={define}
        partOfSpeech={props.keyword.partOfSpeech[0][0]}
      />
      <Definitions
        data={define2}
        partOfSpeech={props.keyword.partOfSpeech[0][1]}
      />
    </div>
  );
  //   return (
  //     <div>
  //       {lenght.map((i) => {
  //         return (
  //           <div>
  //             <Definitions data={meaning[0][i]} />
  //             <Origin data={meaning[0][i]} />
  //             <Sentence data={meaning[0][i]} />
  //             <Pictures data={meaning[0][i]} />
  //             <Synonym_Antonym data={meaning[0][i]} />
  //           </div>
  //         );
  //       })}{" "}
  //     </div>
  //   );
}
