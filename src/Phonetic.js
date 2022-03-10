import React from "react";
import Player from "./PlayButton";

export default function phonetic(props) {
  let url = props.phonetic[0].audio;

  return (
    <span>
      <Player url={url} />
      <span>{props.phonetic[1].text}</span>
    </span>
  );
}
