import React from "react";
import "./Service.css";
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll(".p-test");
      const page2 = document.querySelector("#p-test2");

      if (!page2) return;

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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="test">
        <div className="top">
          <span style={{ fontStyle: "italic" }}>Services that i Provide</span>
        </div>
      </div>

      {/* Heading Section */}
      <div id="p-test2">
        <div className="p-test">
          <h1>
            My Special Service For Your <br />
            <div className="bus">
              <span>Business Development</span>
            </div>
          </h1>
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
          <div className="span-p"></div>
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
          <div className="span-p"></div>
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
          <div className="span-p"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
