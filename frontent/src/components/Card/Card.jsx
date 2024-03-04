import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";

//
const Card = ({ emoji, heading, details }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="cardContect" data-aos="fade-left">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="card-btn">Learn more</button>
    </div>
  );
};

export default Card;
