import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AVLOGO from "../../assets/av.png";
import "./Header.css";
import { IoMdClose } from "react-icons/io";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopover = () => {
    setPopoverVisible(true);
  };
  const handleClose = () => {
    setPopoverVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    scrollToTop();
    navigate("/contact");
  };
  const handleFb = () => {
    window.open("https://en-gb.facebook.com/login/web/");
  };
  const handleTwitter = () => {
    window.open("https://x.com/i/flow/login?lang=en");
  };
  const handleLinkdin = () => {
    window.open("https://www.linkedin.com/company/login");
  };
  const handleyoutube = () => {
    window.open("https://www.youtube.com/index?persist_app=1&app=desktop");
  };
  const toggleMobileMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand text-white"
            onClick={scrollToTop}
          >
            <img src={AVLOGO} className="logo" alt="Logo" />
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button className="menu-toggle-btn" onClick={toggleMobileMenu}>
            {menuVisible ? <IoMdClose /> : <SlMenu />}
          </button>
          <form
            className={`d-flex gap-4 navbar-links ${
              menuVisible ? "active" : ""
            }`}
          >
            <Link
              onClick={scrollToTop}
              to="/"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              HOME
            </Link>
            <Link
              onClick={scrollToTop}
              to="/about"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              ABOUT
            </Link>
            <Link
              onClick={scrollToTop}
              to="/work"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              WORK
            </Link>
            <Link
              onClick={scrollToTop}
              to="serviceAll"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              SERVICES
            </Link>
            <Link
              onClick={scrollToTop}
              to="/test"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              TESTIMONIAL
            </Link>
            <Link
              onClick={scrollToTop}
              to="/blog"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              BLOG
            </Link>
            <Link
              onClick={scrollToTop}
              to="/contact"
              className="navbar-brand"
              style={{ fontSize: "16px", color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(170, 211, 2)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              CONTACT
            </Link>
          </form>

          <div className="hover-button d-flex gap-3">
            <button
              className="btn p-2 talk-btn"
              onClick={handleContact}
              style={{ fontWeight: "bold", backgroundColor: "#c9f31d" }}
            >
              Let's Talk <FaArrowRightLong style={{ verticalAlign: "-2px" }} />
            </button>
            <button
              className="btn btn-light"
              onClick={togglePopover}
              type="button"
            >
              <SlMenu style={{ fontWeight: "bold" }} />
            </button>
          </div>
        </div>
        {popoverVisible && (
          <div className="popover-menu">
            <div className="close-pop">
              <button onClick={handleClose}>
                <IoMdClose style={{ fontSize: "25px" }} />
              </button>
            </div>
            <div className="avlogo">
              <img src={AVLOGO} className="logo" alt="Logo" />
              <h1>MERN</h1>
            </div>
            <div style={{ marginTop: "30px", padding: "10px" }}>
              <p style={{ color: "rgb(174, 176, 179)" }}>
                Neque porro quisquam est, dolorem ipsum dolor sit consectetur,
                aliquam quaerats voluptatem. Ut ad minima veniam, exercitationem
                laboriosam, nisi ut aliquid ex ea autem
              </p>
            </div>
            <div className="pop-text text-white">
              <h6 style={{ color: "rgb(174, 176, 179)" }}>ADDRESS</h6>
              <h6>Mansorover Jaipur</h6>
              <h6 style={{ color: "rgb(174, 176, 179)" }}>EMAIL</h6>
              <h6>ak228308@gmail.com</h6>
              <h6 style={{ color: "rgb(174, 176, 179)" }}>CALL NOW</h6>
              <h6>+91-9636366250</h6>
            </div>
            <div className="icon-gol">
              <div className="gol" onClick={handleFb}>
                <LiaFacebook style={{ fontSize: "30px" }} />
              </div>
              <div className="gol" onClick={handleTwitter}>
                <SlSocialTwitter style={{ fontSize: "30px" }} />
              </div>
              <div className="gol" onClick={handleLinkdin}>
                <CiLinkedin style={{ fontSize: "30px" }} />
              </div>
              <div className="gol" onClick={handleyoutube}>
                <CiYoutube style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div className="talk-button">
              <button style={{ fontWeight: "bold" }} onClick={handleContact}>
                <IoIosArrowForward /> Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
