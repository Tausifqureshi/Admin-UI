import React from "react";
// import "./Loader.css"; // Loader CSS ko alag file mein rakha gaya hai

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default Loader;



