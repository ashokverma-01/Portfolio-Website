import React from "react";
import { useState, useEffect } from "react";
import { PiStarOfDavid } from "react-icons/pi";
import "./About.css";
import AboutImage from "../../assets/aboutImage.png";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import Figma from "../../assets/figma.png";
import Word from "../../assets/word.png";
import Html from "../../assets/html.png";
import Boot from "../../assets/boot.png";

const About = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowExperience(false);
    setShowEducation(false);
    setShowSkills(false);
  };
  const handleExperienceClick = () => {
    setShowExperience(true);
    setShowAbout(false);
    setShowEducation(false);
    setShowSkills(false);
  };
  const handleEducationClick = () => {
    setShowEducation(true);
    setShowExperience(false);
    setShowAbout(false);
    setShowSkills(false);
  };
  const handleSkillsClick = () => {
    setShowSkills(true);
    setShowEducation(false);
    setShowExperience(false);
    setShowAbout(false);
  };

  useEffect(() => {
    page2Animation();
    onwords2Animation();
  }, []);

  const page2Animation = () => {
    const headings = document.querySelectorAll(".page h1");
    const page2 = document.querySelector("#page2");

    window.addEventListener("scroll", () => {
      const page2Position = page2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (page2Position < windowHeight * 0.7) {
        headings.forEach((heading, index) => {
          setTimeout(() => {
            heading.style.transform = "translateY(0)";
            heading.style.opacity = "1";
          }, index * 200);
        });
      }
    });
  };
  const onwords2Animation = () => {
    const headings = document.querySelectorAll(".about-text");
    const page2 = document.querySelector("#moving-text4");

    window.addEventListener("scroll", () => {
      const page2Position = page2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (page2Position < windowHeight * 0.7) {
        headings.forEach((heading, index) => {
          setTimeout(() => {
            heading.style.transform = "translateY(0)";
            heading.style.opacity = "1";
          }, index * 200);
        });
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container1">
        <div className="icon-about">
          <PiStarOfDavid style={{ fontSize: "30px", color: "#c9f31d" }} />
        </div>
        <div id="page2">
          <div className="page">
            <h1>
              I'm Ashok Verma, I'm a Brand & Webflow Designer, Currently
              residing
              <br />
              <span style={{ marginLeft: "30px" }}>
                in the lush Victoria Street London, Matias operates globally and
                is
              </span>
              <br />
              <span style={{ marginLeft: "250px" }}>
                ready to take on any design challenge.
              </span>
            </h1>
          </div>
        </div>
        <div className="btn-page">
          <button onClick={handleAboutClick}>ABOUT</button>
          <button onClick={handleExperienceClick}>EXPERIENCE</button>
          <button onClick={handleEducationClick}>EDUCATION</button>
          <button onClick={handleSkillsClick}>SKILLS</button>
        </div>
      </div>
      {/* Personal Page */}
      {showAbout && (
        <div className="about-container">
          <div className="about-page">
            <div className="image-page">
              <img src={AboutImage} />
            </div>
            <div className="text-about">
              <h1>Personal Info</h1>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  color: "rgb(174, 176, 179)",
                }}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                velit esse quam nihil
              </p>
              <div className="Ephone">
                <div className="email">
                  <h4 style={{ color: "rgb(174, 176, 179)" }}>Email</h4>
                  <h4 style={{ color: "white", marginTop: "20px" }}>
                    ak228308@gmail.com
                  </h4>
                </div>
                <div className="email">
                  <h4 style={{ color: "rgb(174, 176, 179)" }}>Phone</h4>
                  <h4 style={{ color: "white", marginTop: "20px" }}>
                    +91-9636366250
                  </h4>
                </div>
              </div>
              <div className="Ephone">
                <div className="email">
                  <h4 style={{ color: "rgb(174, 176, 179)" }}>Address</h4>
                  <h4 style={{ color: "white", marginTop: "20px" }}>
                    Mansorover ,Jaipur
                  </h4>
                </div>
                <div className="email">
                  <h4 style={{ color: "rgb(174, 176, 179)" }}>Follow</h4>
                  <h4 style={{ color: "white", marginTop: "20px" }}>
                    <div className="icon-page">
                      <LiaFacebook />
                      <SlSocialTwitter />
                      <CiLinkedin />
                      <TfiWorld />
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Experince  Page*/}
      {showExperience && (
        <div className="about-container">
          <div className="about-page">
            <div id="image-p">
              <div className="image-page">
                <img src={AboutImage} />
              </div>
            </div>
            <div className="text-about">
              <h1>My Experience</h1>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  color: "rgb(174, 176, 179)",
                }}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                velit esse quam nihil
              </p>
              <div className="Experience" style={{ marginTop: "40px" }}>
                <div>
                  <p style={{ color: "rgb(170, 211, 2)" }}>In 2022</p>
                </div>
                <div>
                  <h4 className="text-white">Software Engineer</h4>
                  <p style={{ color: "rgb(174, 176, 179)" }}>
                    UI Head & Manager
                  </p>
                </div>
              </div>
              <div className="Experience">
                <div>
                  <p style={{ color: "rgb(170, 211, 2)" }}>In 2023</p>
                </div>
                <div>
                  <h4 className="text-white">Product Designer</h4>
                  <p style={{ color: "rgb(174, 176, 179)" }}>
                    Head of Department
                  </p>
                </div>
              </div>
              <div className="Experience1">
                <div>
                  <p style={{ color: "rgb(170, 211, 2)" }}>In 2024</p>
                </div>
                <div>
                  <h4 className="text-white">UI & UX Designer</h4>
                  <p style={{ color: "rgb(174, 176, 179)" }}>www.google.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Experince  Page*/}
      {showEducation && (
        <div className="about-container">
          <div id="about">
            <div className="about-page">
              <div id="image-p">
                <div className="image-page">
                  <img src={AboutImage} />
                </div>
              </div>
              <div className="text-about">
                <h1>My Education</h1>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    color: "rgb(174, 176, 179)",
                  }}
                >
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                  veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                  velit esse quam nihil
                </p>
                <div className="Experience" style={{ marginTop: "40px" }}>
                  <div>
                    <p style={{ color: "rgb(170, 211, 2)" }}>2018-2020</p>
                  </div>
                  <div>
                    <h4 className="text-white">Programming Course</h4>
                    <p style={{ color: "rgb(174, 176, 179)" }}>
                      New York University
                    </p>
                  </div>
                </div>
                <div className="Experience">
                  <div>
                    <p style={{ color: "rgb(170, 211, 2)" }}>2021-2022</p>
                  </div>
                  <div>
                    <h4 className="text-white">University of Design</h4>
                    <p style={{ color: "rgb(174, 176, 179)" }}>
                      Kingston, United States
                    </p>
                  </div>
                </div>
                <div className="Experience1">
                  <div>
                    <p style={{ color: "rgb(170, 211, 2)" }}>2023-2024</p>
                  </div>
                  <div>
                    <h4 className="text-white">Web Design Course</h4>
                    <p style={{ color: "rgb(174, 176, 179)" }}>
                      New York University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Skills  Page*/}
      {showSkills && (
        <div className="about-container">
          <div id="about">
            <div className="about-page">
              <div id="image-p">
                <div className="image-page">
                  <img src={AboutImage} />
                </div>
              </div>
              <div className="text-about">
                <h1>My Skills</h1>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    color: "rgb(174, 176, 179)",
                  }}
                >
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                  veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                  velit esse quam nihil
                </p>
                <div className="Ephone">
                  <div className="email-skill">
                    <div className="figma">
                      <img src={Figma} />
                    </div>
                    <div>
                      <h5 style={{ color: "rgb(174, 176, 179)" }}>Figma</h5>
                      <h1>90%</h1>
                    </div>
                  </div>
                  <div className="email-skill">
                    <div className="figma">
                      <img src={Word} />
                    </div>
                    <div>
                      <h5 style={{ color: "rgb(174, 176, 179)" }}>Wordpress</h5>
                      <h1>94%</h1>
                    </div>
                  </div>
                </div>
                <div className="Ephone">
                  <div className="email-skill">
                    <div className="figma">
                      <img src={Html} />
                    </div>
                    <div>
                      <h5 style={{ color: "rgb(174, 176, 179)" }}>Html</h5>
                      <h1>97%</h1>
                    </div>
                  </div>
                  <div className="email-skill">
                    <div className="figma">
                      <img src={Boot} />
                    </div>
                    <div>
                      <h5 style={{ color: "rgb(174, 176, 179)" }}>Bootstrap</h5>
                      <h1>86%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* scroll */}
      <div id="moving-text3">
        <div class="con3">
          <span>Mobile Application Design</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Website Design</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Bussiness Branding</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
        <div class="con3">
          <span>UI And UX Design</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Logo Design</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Frontend And Backend </span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
        <div class="con3">
          <span>E-Commerce Website</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>B2B Project</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Responsive Website</span>
          <span id="gola3">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
      </div>
      {/*  last page */}

      <div className="last-page">
        <div id="moving-text4">
          <div className="about-text">
            <h1>Our Awards</h1>
            <h5
              style={{ color: "#c9f31d", cursor: "pointer" }}
              onClick={scrollToTop}
            >
              View My Work
            </h5>
          </div>
          <div className="about-text">
            <h5>Site Of The Day</h5>
            <h5> Css & Animation</h5>
            <p>2021</p>
          </div>
          <div className="about-text">
            <h5>Best Business</h5>
            <h45>New Js Strategy</h45>
            <p>2022</p>
          </div>
          <div className="about-text">
            <h5>Motion Graphic</h5>
            <h45>3D & Visual Effect</h45>
            <p>2023</p>
          </div>
          <div className="about-text">
            <h5>Video Design</h5>
            <h5>Css & Animation</h5>
            <p>2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
