import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Definitions from "./Definitions";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";

function App() {
  let [word, setWord] = useState("welcome");
  let [keyword, setKeyWord] = useState({
    ready: false,
    status: true,
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
    console.log(response.status);
    {
      response.status == 200
        ? setKeyWord({
            ready: true,
            status: true,
            searchWord: response.data[0].word,
            meaning: response.data[0].meanings,
            phonetic: response.data[0].phonetics,
          })
        : alert("please check spelling");
    }
  }
  console.log(keyword);
  if (keyword.status === false) {
    alert("please check spelling");
    // console.log(keyword);
  }

  if (keyword.ready) {
    return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <h1 className="header">Look up a word, learn it forever.</h1>
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              onChange={updateWord}
              className="search"
            />
            <input type="submit" value="search" className="submit" />
          </form>
          <div>
            <span className="word">{keyword.searchWord}</span>
          </div>

          <div>
            {keyword.meaning.map(function (index, i) {
              return (
                <div key={index["app"]}>
                  <Definitions meaning={keyword.meaning[i]} />
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
            by{" "}
            <a
              href="https://www.linkedin.com/in/keren-lyahov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keren Lyahovchook
            </a>
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
