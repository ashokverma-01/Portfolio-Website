import { useEffect } from "react";
import "./ServiceAll.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import ProjectImage from "../../assets/projectimage.png";
import { MdOutlinePayments } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineFactCheck } from "react-icons/md";

const ServiceAll = () => {
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
    <div>
      <div className="contact">
        <div>
          <h1 style={{ color: "white" }}>Services All</h1>
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
              Services All
            </Link>
          </span>
        </div>
      </div>
      <div className="service">
        <div className="service-box">
          <div className="item1">
            <div className="one1">
              <h2>01</h2>
            </div>
            <div className="two2">
              <h4>Designer</h4>
              <h1>Illustration Design</h1>
            </div>
          </div>
          <div className="item2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
              deserunt mollit
            </p>
          </div>
          <div className="item3">
            <button>
              <GoArrowUpRight style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
        <div className="service-box">
          <div className="item1">
            <div className="one1">
              <h2>02</h2>
            </div>
            <div className="two2">
              <h4>Branding</h4>
              <h1>Business Branding</h1>
            </div>
          </div>
          <div className="item2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
              deserunt mollit
            </p>
          </div>
          <div className="item3">
            <button>
              <GoArrowUpRight style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
        <div className="service-box">
          <div className="item1">
            <div className="one1">
              <h2>03</h2>
            </div>
            <div className="two2">
              <h4>UI/UX Design</h4>
              <h1>Web UI/UX Design</h1>
            </div>
          </div>
          <div className="item2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
              deserunt mollit
            </p>
          </div>
          <div className="item3">
            <button>
              <GoArrowUpRight style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
        <div className="service-box">
          <div className="item1">
            <div className="one1">
              <h2>04</h2>
            </div>
            <div className="two2">
              <h4>Web Design</h4>
              <h1>Application Design</h1>
            </div>
          </div>
          <div className="item2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
              deserunt mollit
            </p>
          </div>
          <div className="item3">
            <button>
              <GoArrowUpRight style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
        <div className="service-box">
          <div className="item1">
            <div className="one1">
              <h2>05</h2>
            </div>
            <div className="two2">
              <h4>SEO Analytics</h4>
              <h1>Digital Marketing</h1>
            </div>
          </div>
          <div className="item2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia
              deserunt mollit
            </p>
          </div>
          <div className="item3">
            <button>
              <GoArrowUpRight style={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* //payment */}
      <div className="payment">
        <div className="payment-1">
          <div className="pay-1-1">
            <div className="pay-icon">
              <MdOutlinePayments style={{ fontSize: "50px" }} />
            </div>
            <div className="basic">
              <h3>Basic Plan</h3>
            </div>
            <div className="month">
              <div>
                <h1>$35</h1>
              </div>
              <div style={{ marginTop: "30px", color: "white" }}>
                <p>/Per Month</p>
              </div>
            </div>
          </div>
          <div className="pay-1-2">
            <div className="pay-li">
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Advetising</li>
                <li>Graphic Design</li>
                <li>Project Management</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div className="pay-btn">
              <button>Start My Project Now</button>
            </div>
          </div>
        </div>
        <div className="payment-2">
          <div className="pay-2-2">
            <div className="pay-icon2">
              <MdOutlineFactCheck
                style={{ fontSize: "50px", color: "white" }}
              />
            </div>
            <div className="basic2">
              <h3>Ultra Plan</h3>
            </div>
            <div className="month2">
              <div>
                <h1>$65</h1>
              </div>
              <div style={{ marginTop: "30px", color: "white" }}>
                <p>/Per Month</p>
              </div>
            </div>
          </div>
          <div className="pay-2-3">
            <div className="pay-li2">
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Advetising</li>
                <li>Graphic Design</li>
                <li>Project Management</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div className="pay-btn2">
              <button>Start My Project Now</button>
            </div>
          </div>
        </div>
        <div className="payment-1">
          <div className="pay-1-1">
            <div className="pay-icon">
              <GrSettingsOption style={{ fontSize: "50px" }} />
            </div>
            <div className="basic">
              <h3>Gold Plan</h3>
            </div>
            <div className="month">
              <div>
                <h1>$95</h1>
              </div>
              <div style={{ marginTop: "30px", color: "white" }}>
                <p>/Per Month</p>
              </div>
            </div>
          </div>
          <div className="pay-1-2">
            <div className="pay-li">
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Advetising</li>
                <li>Graphic Design</li>
                <li>Project Management</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div className="pay-btn">
              <button>Start My Project Now</button>
            </div>
          </div>
        </div>
      </div>
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
          <p style={{ paddingRight: "10px" }}>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Reviewing any existing branding</li>
          <li>Target audience and competitors research</li>
          <li>Developing a strategy</li>
          <div className="span-p2">
            <div className="span-p"></div>
          </div>
        </div>
        <div className="second">
          <h1>Design</h1>
          <p style={{ paddingRight: "10px" }}>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Developing wireframes and mockup</li>
          <li>Choosing typography, color palettes,</li>
          <li>Refining the design</li>
          <div className="span-p2">
            <div className="span-p"></div>
          </div>
        </div>
        <div className="third">
          <h1>Webflow</h1>
          <p style={{ paddingRight: "10px" }}>
            Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut
            fugit
          </p>
          <li>Testing the website thoroughly launch</li>
          <li>Choosing typography, color palettes,</li>
          <li>Refining the design</li>
          <div className="span-p2">
            <div className="span-p"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAll;
