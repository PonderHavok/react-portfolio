import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/vid1.mp4" autoPlay loop muted />
      <h1>Welcome All,</h1>
      <p>To the React Portfolio of Jonathen Talbott!</p>
    </div>
  );
}

export default HeroSection;
