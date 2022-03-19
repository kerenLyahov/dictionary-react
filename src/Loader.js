import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      {/* Documentation: https://www.npmjs.com/package/react-spinners */}

      <RiseLoader color={"#EF3C7A"} loading={true} size={25} margin={20} />
    </div>
  );
}
