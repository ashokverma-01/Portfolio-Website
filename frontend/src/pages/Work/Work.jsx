import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import BrandImage from "../../assets/brand.png";
import BrandImage1 from "../../assets/brand1.png";
import BrandImage2 from "../../assets/brand2.png";
import BrandImage3 from "../../assets/brand3.png";
import BrandImage4 from "../../assets/brand4.png";
import BrandImage5 from "../../assets/brand5.png";
import ProjectImage from "../../assets/projectimage.png";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

const Work = () => {
  useEffect(() => {
    page2Animation();
    fixedAnimation();
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

  const fixedAnimation = () => {
    const headings = document.querySelectorAll(".fixed");
    const page2 = document.querySelector("#fix");

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
      <div>
        <div className="project">
          <div class="top-text">
            <span style={{ fontStyle: "italic" }}>Complete Project</span>
          </div>
        </div>
        <div id="p-h2">
          <div className="p-h">
            <h1>
              Look At My Portfolio And Give Me <br></br>
              <span style={{ marginLeft: "250px" }}>Your Feedback</span>
            </h1>
          </div>
        </div>
        <div className="p-images">
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
        <div className="p-images">
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
        <div className="p-images">
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
        <div className="clickmore">
          <div className="more2">
            <div className="more">
              <div className="icon-more">
                <HiOutlineArrowRight
                  style={{ color: "black", fontSize: "25px" }}
                />
                <br />
                <Link
                  to="/work-port"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Click More Work
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-b">
          <div className="project1">
            <div className="one-two">
              <div className="together">
                <div className="one"></div>
                <div className="two">Need a Project?</div>
              </div>
              <div id="fix">
                <div className="fixed">
                  <h1>Let's Work Together. Fixed A Meeting</h1>
                </div>
              </div>
            </div>
            <div className="email-location">
              <div className="email2">
                <div className="email-icon">
                  <TfiEmail style={{ fontSize: "20px" }} />
                </div>

                <div style={{ paddingLeft: "20px", color: "white" }}>
                  <h5 style={{ color: "rgb(174, 176, 179)" }}>Email</h5>
                  <p>ak228308@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="email-location">
              <div className="email2">
                <div className="email-icon">
                  <IoLocationOutline style={{ fontSize: "20px" }} />
                </div>

                <div style={{ paddingLeft: "20px", color: "white" }}>
                  <h5 style={{ color: "rgb(174, 176, 179)" }}>Location</h5>
                  <p>Mansarover Jaipur Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project2">
            <img src={ProjectImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
