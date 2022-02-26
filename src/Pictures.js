import React from "react";
import "./Pictures.css";

export default function Pictures() {
  let logo =
    "http://www.verbatimmag.com/wp-content/uploads/2018/05/words-bg.png";

  return (
    <div className="pictures">
      <img src={logo} alt="Logo" />
      <img src={logo} alt="Logo" />
      <img src={logo} alt="Logo" />
      <img src={logo} alt="Logo" />
    </div>
  );
}
