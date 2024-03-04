import React, { useEffect } from "react";
import Card from "../Card/Card.jsx";
import HeartEmoji from "../../assets/Emoji-icon/Emoji-icon.png";
import Classes from "../../assets/Emoji-icon/emoji-icon2.png";
import Humble from "../../assets/Emoji-icon/humble.png";
//
import pdf from "./Lebnslauf_Imad.Pdf.pdf";
// react icons
import { FcDownload } from "react-icons/fc";
// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";
//

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="services" data-aos="fade-right" id="Services">
      {/* Linke Seite */}
      <div className="awesome">
        <span>Awesome Features</span>
        <span>Services</span>
        <span>
          Front-end, Backend developer,I enjoy spending my time tackling
          interesting problems, and presenting feasible innovative solutions, I
          am always driven by my curiosity to find answers to the most pressing
          questions, I am blessed to have the ability to quickly learn and adapt
          to arising challenges. I love to work closely with customers..
          {/* Frontend Expertise <br />& Web Designer */}
        </span>
        <a href={pdf}>
          <button className="btn ser-btn">
            Download CV <FcDownload />
          </button>
        </a>

        <div className="blur ser-blur"></div>
      </div>
      {/* Rechte Seite */}
      <div className="cards">
        <div style={{ marginLeft: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma,Sketch,Photoshop"}
          />
        </div>
        <div style={{ marginTop: "-15rem", marginLeft: "-7rem" }}>
          <Card
            emoji={Classes}
            heading={"Frontend Development"}
            details={"Html,css,Javascipt,react,TypeScript"}
          />
        </div>
        <div style={{ marginTop: "10rem", marginLeft: "-12rem" }}>
          <Card
            emoji={Humble}
            heading={"Hoppy"}
            details={"Fusßbal,musik,schwamen"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
