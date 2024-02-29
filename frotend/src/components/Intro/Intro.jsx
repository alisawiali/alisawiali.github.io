import React, { useEffect } from "react";
// Import icons aud react icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
//  imad images
import imadImage from "../../assets/Imad-Imgags/Imad.png";
import crwonImg from "../../assets/Crwon-img/crwon.png";
// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="intro">
      <div className="intro-left" data-aos="fade-right">
        <div className="intro-name">
          <span>Hy! I'am</span>
          <span>Alisawi Imad</span>
          <span>
            Alisawi is an experienced frontend developer and designer with
            mobile-friendly responsive design
          </span>
        </div>
        {/* <button className="btn i-btn">Contact Me</button> */}
        <div className="intro-icons" data-aos="fade-right">
          <a href="https://www.linkedin.com/feed">
            <FaLinkedin className="i-icon" />
          </a>

          <a href="https://github.com/alisawiali">
            <FaGithub className="i-icon" />
          </a>
        </div>
      </div>
      <div className="intro-rihgt" data-aos="fade-left">
        <img src={imadImage} alt="" className="imadIcon" />
        {/* <FloatingDiv imgCrown={crwonImg} text1="web-" text2=" Devoloper" /> */}
      </div>
      <div className="blur ser-blur"></div>
    </div>
  );
};

export default Intro;
