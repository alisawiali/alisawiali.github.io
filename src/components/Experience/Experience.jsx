import React, { useEffect } from "react";
// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";
//
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="experience" data-aos="fade-up" id="Experience">
      <div className="achievement">
        <div className="circle">+1</div>
        <span>Yeras</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">4+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">+1</div>
        <span>companices</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
