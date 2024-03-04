import React, { useEffect } from "react";
// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";
const FloatingDiv = ({ imgCrown, text1, text2 }) => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  return (
    <div className="floatingDiv">
      <div className="CrownContainer" data-aos="fade-left">
        <img src={imgCrown} alt="" className="crwonImg" />
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
