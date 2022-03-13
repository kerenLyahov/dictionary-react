import React from "react";
import Player from "./PlayButton";
import "./Phonetic.css";

export default function phonetic(props) {
  let url = props.phonetic[0].audio;

  return (
    <span className="phonetic">
      <span className="playerButton">
        <Player url={url} />
      </span>
      <div>{props.phonetic[1].text}</div>
    </span>
  );
}
