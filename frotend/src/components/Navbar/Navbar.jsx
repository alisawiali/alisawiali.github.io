import React, { useState } from "react";
import ContactModal from "../Contact/ContactModal";
import Toggel from "../Toggel/Toggel";

//  import  themeContext auds dem context
import { themeContext } from "../../context";
import { useContext } from "react";

//  import react scroll aus dem react-scroll.
import { Link } from "react-scroll";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="n-wrapper"
      style={{ background: darkMode ? "#121212" : "#f4f4f4" }}
    >
      <div className="n-left">
        <div
          className="n-name"
          style={{
            color: darkMode ? "orange" : "black",
          }}
        >
          Alisawi
        </div>
        <Toggel />
      </div>
      <div className="n-right">
        <div
          className="n-list"
          style={{ color: darkMode ? "orange" : "black" }}
        >
          <ul>
            <Link spy={true} smooth={true} to="intro">
              <li className="actives">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li>Services</li>
            </Link>
            <Link spy={true} smooth={true} to="Experience">
              <li>Experience</li>
            </Link>
            <Link spy={true} smooth={true} to="Protfolio">
              <li>Protfolio</li>
            </Link>
          </ul>
        </div>
        <button onClick={openModal} className="btn b-btn">
          Contact us
        </button>
        {isModalOpen && <ContactModal close={closeModal} />}
      </div>
    </div>
  );
};

export default Navbar;
