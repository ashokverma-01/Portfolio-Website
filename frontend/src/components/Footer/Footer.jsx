import React from "react";
import "./Footer.css";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFb = () => {
    window.open("https://en-gb.facebook.com/login/web/");
  };
  const handleInsta = () => {
    window.open("https://www.instagram.com/accounts/login/?force");
  };
  const handleGithub = () => {
    window.open("https://github.com/login");
  };
  const handleLinkdin = () => {
    window.open("https://www.linkedin.com/login");
  };

  return (
    <>
      <div className="right">
        <div className="btn-fb" onClick={handleFb}>
          <h4>Facebook</h4>
          <span>
            <FaArrowRight style={{ fontSize: "25px" }} />
          </span>
        </div>

        <div className="btn-fb" onClick={handleInsta}>
          <h4>Instagram</h4>
          <span>
            <FaArrowRight style={{ fontSize: "25px" }} />
          </span>
        </div>
        <div className="btn-fb" onClick={handleGithub}>
          <h4>Git-Hub</h4>
          <span>
            <FaArrowRight style={{ fontSize: "25px" }} />
          </span>
        </div>
        <div className="btn-fb" onClick={handleLinkdin}>
          <h4>Linkdin</h4>
          <span>
            <FaArrowRight style={{ fontSize: "25px" }} />
          </span>
        </div>
      </div>

      <div className="last-footer">
        <div>
          <h5>
            Copyright © 2025 <span style={{ color: "#c9f31d" }}>Ashok</span>.
            All rights reserved.
          </h5>
        </div>
        <div>
          <h5>Terms & Condition Privacy Policy</h5>
        </div>
        <div>
          <button onClick={scrollToTop}>
            <FaArrowUp style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
