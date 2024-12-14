import React from "react";
import "./Loader.css"; // Importing the CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
