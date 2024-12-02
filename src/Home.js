import React from "react";
import "./Home.css";

const Home = ({ handleScroll }) => {
  return (
    <div className="home-container">
      <h1>Welcome to My Page</h1>
      <button onClick={() => handleScroll("About")} className="scroll-button">
        Scroll to About
      </button>
    </div>
  );
};

export default Home;
