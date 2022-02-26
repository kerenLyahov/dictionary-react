import React, { useState } from "react";
import "./App.css";
import Definitions from "./Definitions";
import Synonym_Antonym from "./Synonym_Antonym";
import Origin from "./Origin";
import Sentence from "./Sentence";
import Pictures from "./Pictures";

function App() {
  let [word, setWord] = useState("");
  let [displayWord, setDisplayWord] = useState("Word");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayWord(word);
    //run axios search
  }
  function updateWord(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a word" onChange={updateWord} />
        <input type="submit" placeholder="search" />
      </form>
      <div className="word">
        {displayWord}
        <span className="speechPart">(noun)</span>
      </div>

      <Definitions />
      <Synonym_Antonym />
      <Origin />
      <Sentence />
      <Pictures />
    </div>
  );
}

export default App;
