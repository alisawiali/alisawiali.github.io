import React, { useState } from "react";
import ContactModal from "../Contact/ContactModal";
import Toggel from "../Toggel/Toggel";

//  import  themeContext auds dem context
import { themeContext } from "../../context";
import { useContext } from "react";
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
            <li className="active">Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Protfolio</li>
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
