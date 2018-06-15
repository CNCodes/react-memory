import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    <h1>Memory Game</h1>
  </div>
);

export default Hero;