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

  return (
    <>
      <div id="moving-footer">
        <div className="footer">
          <div className="touch">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="down">
            <div className="left">
              <h3>
                Hello, I’m Ashok Kumar Verma, Website & User Interface Designer
                based in Jaipur.
              </h3>
              <h3
                style={{
                  marginTop: "50px",
                  color: "#c9f31d",
                }}
              >
                ak228308@gmail.com
              </h3>
            </div>
            <div className="right">
              <div className="fb">
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
              </div>
              <div className="fb" style={{ marginTop: "40px" }}>
                <div className="btn-fb">
                  <h4>Webflow</h4>
                  <span>
                    <FaArrowRight style={{ fontSize: "25px" }} />
                  </span>
                </div>
                <div className="btn-fb">
                  <h4>Dribble</h4>
                  <span>
                    <FaArrowRight style={{ fontSize: "25px" }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <div>
          <h5>
            Copyright © 2023 <span style={{ color: "#c9f31d" }}>Ashok</span>.
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
