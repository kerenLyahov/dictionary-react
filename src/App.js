import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Definitions from "./Definitions";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";

function App() {
  let [word, setWord] = useState("Welcome");
  let [keyword, setKeyWord] = useState({
    ready: false,
  });
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

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
    setKeyWord({
      ready: true,
      searchWord: response.data[0].word,
      meaning: response.data[0].meanings,
    });
  }

  if (keyword.ready) {
    return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={updateWord}
              className="search"
            />
            <input type="submit" placeholder="search" className="submit" />
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
              style={{ color: (theme) => theme.text }}
            >
              Open-source code
            </a>{" "}
            by Keren Lyahovchook
          </div>
        </div>
      </ThemeProvider>
    );
  } else {
    search();

    return <div>Lodaing</div>;
  }
}
export default App;
