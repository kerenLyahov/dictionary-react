import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Definitions from "./Definitions";

function App() {
  let [word, setWord] = useState("Word");
  let [keyword, setKeyWord] = useState({
    ready: false,
    searchWord: "Hello",
  });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function search() {
    // Documentation - https://dictionaryapi.dev/
    let APIUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(APIUrl).then(handleResponse);
  }

  function handleResponse(response) {
    let definitions = response.data.length;
    setKeyWord({
      ready: true,
      searchWord: response.data[0].word,
      meaning: response.data[0].meanings,
    });
  }

  if (keyword.ready) {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={updateWord}
          />
          <input type="submit" placeholder="search" />
        </form>
        <div className="word">{keyword.searchWord}</div>
        <div>
          {keyword.meaning.map(function (meaning, index) {
            return (
              <div key={index}>
                <Definitions meaning={keyword.meaning[index]} />
              </div>
            );
          })}
        </div>

        <div id="opnSrcLink">
          <a
            href="https://github.com/kerenLyahov/Dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Keren Lyahovchook
        </div>
      </div>
    );
  } else {
    search();

    return <div>Lodaing</div>;
  }
}
export default App;
