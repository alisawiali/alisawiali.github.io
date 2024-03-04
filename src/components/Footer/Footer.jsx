import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-contanet">
        <a href="mailto:alisawiali@gmail.com">alisawiali@gmail.com</a>
        <div className="f-icons">
          <a href="https://www.linkedin.com/feed">
            <FaLinkedin className="icon" size="3rem" />
          </a>

          <a href="https://github.com/alisawiali">
            <FaGithub className="icon" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
