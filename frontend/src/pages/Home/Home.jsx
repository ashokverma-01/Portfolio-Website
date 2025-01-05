import React, { useEffect, useState } from "react";
import "./Home.css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { ImPlay2 } from "react-icons/im";
import Man from "../../assets/man.png";
import { PiStarOfDavid } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialTwitter } from "react-icons/sl";
import ReactPlayer from "react-player";
import { CiLinkedin } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import About from "../About/About";
import Work from "../Work/Work";
import Testimonial from "../Testimonial/Test";
import Service from "../Service/Service";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  useEffect(() => {
    const mouseEffect = document.querySelector("#mouse-effect");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (mouseEffect) {
        mouseEffect.style.left = `${mouseX - 50}px`;
        mouseEffect.style.top = `${mouseY - 50}px`;

        const distance = Math.sqrt(
          Math.pow(mouseX - window.innerWidth / 2, 2) +
            Math.pow(mouseY - window.innerHeight / 2, 2)
        );
        const scale = 1 + distance / 1000;
        mouseEffect.style.transform = `scale(${scale})`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const videoList = [
    "https://youtube.com/shorts/8JxP03Vo3yY?si=iF-6ZyK0a1nM7c72",
    "https://youtube.com/shorts/6_1jIMRgrvk?si=4bEwMG6lcxHc8TTq",
    "https://youtube.com/shorts/meJpDX31wAs?si=X6kSUQ2rw_i_0iQ3",
    "https://youtube.com/shorts/TCu3hUb3q-I?si=iasVFzd6fZg-cdHS",
    "https://youtube.com/shorts/k6eczNko02o?si=GU-JWp5wSILyr1_6",
    "https://youtube.com/shorts/M0oac2Rto9o?si=cSwhcGjpowkn4Bda",
    "https://youtube.com/shorts/PZ3wjVp2Xfs?si=ZZMl0CnvzaPO8VNk",
  ];

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };
  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoList.length - 1 : prevIndex - 1
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false); // Stop the video when closing the modal
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
  const handleMap = () => {
    window.open("https://www.google.com/maps");
  };

  return (
    <>
      <div className="main">
        <div id="mouse-effect">
          <FaCarSide />
        </div>

        <div className="container-home text-white">
          <div
            className="freelance"
            style={{ borderBottom: "1px solid white", width: "48%" }}
          >
            <h4>
              Currently <span style={{ color: "#c9f31d" }}>Available</span> For
              Freelance <br />
              <br />
              Worldwide
              <BsArrowUpRight style={{ marginLeft: "20px" }} />
            </h4>
            <div class="con2">
              <div id="moving-text2">
                <span>
                  <FaCarSide />
                </span>
              </div>
            </div>
          </div>

          <div className="creative">
            <h1 className="visual">MERN Stack</h1>
            <div className="example">
              <h1>Developer</h1>
            </div>
          </div>
          <div className="icon-video text-white">
            <h1 className="arrow">
              <FaPersonWalkingArrowRight />
            </h1>
            <h1 style={{ color: "#c9f31d" }}>
              <ImPlay2 onClick={handlePlayButtonClick} />
            </h1>
            <p style={{ marginTop: "6px" }}>
              Work <br />
              Process
            </p>
          </div>
        </div>
        <div className="image">
          <img src={Man} alt="Man illustration" />
        </div>
        <div className="follow">
          <p className="me" style={{ color: "rgb(174, 176, 179)" }}>
            FOLLOW
          </p>
          <p className="arrowme"></p>
          <p className="me" style={{ color: "rgb(174, 176, 179)" }}>
            ME
          </p>
          <p className="me" onClick={handleFb}>
            <LiaFacebook style={{ color: "white", fontSize: "25px" }} />
          </p>

          <p className="me" onClick={handleTwitter}>
            <SlSocialTwitter style={{ color: "white", fontSize: "22px" }} />
          </p>

          <p className="me" onClick={handleLinkdin}>
            <CiLinkedin style={{ color: "white", fontSize: "24px" }} />
          </p>

          <p className="me" onClick={handleMap}>
            <TfiWorld style={{ color: "white", fontSize: "22px" }} />
          </p>
        </div>
      </div>
      {/* scroll moving text */}

      <div id="moving-text">
        <div className="con">
          <span>Mobile Application Design</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Website Design</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Business Branding</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
        <div className="con">
          <span>UI And UX Design</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Logo Design</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Frontend And Backend</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
        <div className="con">
          <span>E-Commerce Website</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>B2B Project</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
          <span>Responsive Website</span>
          <span id="gola">
            <PiStarOfDavid style={{ fontSize: "30px" }} />
          </span>
        </div>
      </div>
      <About />
      <Work />
      <Service />
      <Testimonial />
      {/* Modal for video */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <ReactPlayer
              url={videoList[currentVideoIndex]}
              playing={isPlaying}
              controls={true}
              width="100%"
              height="400px"
            />
            <div className="modal-footer">
              <button onClick={handlePreviousVideo}>Previous Video</button>
              <button onClick={handleNextVideo}>Next Video</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
