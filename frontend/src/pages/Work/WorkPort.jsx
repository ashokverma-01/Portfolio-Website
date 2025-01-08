import { useState, useEffect } from "react";
import "./WorkPort.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import BrandImage from "../../assets/brand.png";
import BrandImage1 from "../../assets/brand1.png";
import BrandImage2 from "../../assets/brand2.png";
import BrandImage3 from "../../assets/brand3.png";
import BrandImage4 from "../../assets/brand4.png";
import BrandImage5 from "../../assets/brand5.png";

const WorkPort = () => {
  const [showAll, setShowAll] = useState(true);
  const [showBranding, setShowBranding] = useState(false);
  const [showLoss, setShowLoss] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  const handleAllClick = () => {
    setShowAll(true);
    setShowBranding(false);
    setShowLoss(false);
    setShowLanding(false);
    setShowWebsite(false);
  };
  const handleBrandingClick = () => {
    setShowBranding(true);
    setShowAll(false);
    setShowLoss(false);
    setShowLanding(false);
    setShowWebsite(false);
  };
  const handleLossClick = () => {
    setShowLoss(true);
    setShowBranding(false);
    setShowAll(false);
    setShowLanding(false);
    setShowWebsite(false);
  };
  const handleLandingClick = () => {
    setShowLanding(true);
    setShowLoss(false);
    setShowBranding(false);
    setShowAll(false);
    setShowWebsite(false);
  };
  const handleWebsiteClick = () => {
    setShowWebsite(true);
    setShowLanding(false);
    setShowLoss(false);
    setShowBranding(false);
    setShowAll(false);
  };
  useEffect(() => {
    page2Animation();
  }, []);

  const page2Animation = () => {
    const headings = document.querySelectorAll(".p-h");
    const page2 = document.querySelector("#p-h2");

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
  return (
    <>
      <div className="portfolia">
        <div>
          <h1 style={{ color: "white" }}>My Work & Portfolio</h1>
        </div>
        <div>
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <span> / </span>
          </span>
          <span>
            <Link style={{ color: "#c9f31d", textDecoration: "none" }}>
              Work
            </Link>
          </span>
        </div>
      </div>
      <div className="porfolia-btn">
        <div className="all-btn">
          <div className="port-btn">
            <button onClick={handleAllClick}>All</button>
          </div>
          <div className="port-btn">
            <button onClick={handleBrandingClick}>Branding-App</button>
          </div>
          <div className="port-btn">
            <button onClick={handleLossClick}>Los-App</button>
          </div>
          <div className="port-btn">
            <button onClick={handleLandingClick}>Landing-Page</button>
          </div>
          <div className="port-btn2">
            <button onClick={handleWebsiteClick}>Website</button>
          </div>
        </div>
      </div>
      {/* All Page */}
      {showAll && (
        <>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Brand Identity & Motion Design</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage1} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage4} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage5} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage2} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage3} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Branding App */}
      {showBranding && (
        <>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage2} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage3} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Loss App */}
      {showLoss && (
        <>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage4} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage5} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Landing App */}
      {showLanding && (
        <>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage3} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Website */}
      {showWebsite && (
        <>
          <div className="p-images2">
            <div className="p-I">
              <img src={BrandImage4} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>PRODUCT DESIGN</h6>
                  <h2>Design & Branding Mokeup</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-I">
              <img src={BrandImage5} />
              <div className="i-foot">
                <div>
                  <h6 style={{ color: "#c9f31d" }}>UI/UX DESIGN</h6>
                  <h2>Mobile Application Development</h2>
                </div>
                <div className="arrow-w">
                  <button>
                    <GoArrowUpRight style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div>
        <div className="project">
          <div class="top-text">
            <span style={{ fontStyle: "italic" }}>Working Process</span>
          </div>
        </div>
        <div id="p-h2">
          <div className="p-h">
            <h1>
              Your Dream Website In Just<br></br>
              <div className="few">
                <span>Few Steps</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="fst">
        <div className="first">
          <h1>Concept</h1>
          <p>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Reviewing any existing branding</li>
          <li>Target audience and competitors research</li>
          <li>Developing a strategy</li>
          <div className="span-p3">
            <div className="span-p"></div>
          </div>
        </div>
        <div className="second">
          <h1>Design</h1>
          <p>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Developing wireframes and mockup</li>
          <li>Choosing typography, color palettes,</li>
          <li>Refining the design</li>
          <div className="span-p3">
            <div className="span-p"></div>
          </div>
        </div>
        <div className="third">
          <h1>Webflow</h1>
          <p>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Testing the website thoroughly launch</li>
          <li>Choosing typography, color palettes,</li>
          <li>Refining the design</li>
          <div className="span-p3">
            <div className="span-p"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPort;
