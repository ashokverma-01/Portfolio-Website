import React, { useEffect } from "react";
import { Carousel } from "antd";
import { FaStar } from "react-icons/fa";
import Test1 from "../../assets/av4.png";
import Test2 from "../../assets/av.jpg";
import Test3 from "../../assets/av5.jpg";
import Recent1 from "../../assets/recentpost1.png";
import Recent2 from "../../assets/recentpost2.png";
import Recent3 from "../../assets/recentpost3.png";
import { PiSignatureDuotone } from "react-icons/pi";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GiFlowerStar } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoSlack } from "react-icons/io5";
import { TiEyeOutline } from "react-icons/ti";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Test.css";

const Test = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          <span style={{ fontStyle: "italic" }}>Testimonial</span>
        </div>
      </div>

      {/* Heading Section */}
      <div id="p-test2">
        <div className="p-test">
          <h1>
            Happy Words From Happy <br />
            <div className="customer">
              <span>Customer</span>
            </div>
          </h1>
        </div>
      </div>

      <div className="test2">
        <div className="test3">
          <div className="image-test">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Test2}
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
              />
            </div>
            <div>
              <img src={Test1} style={{ width: "200px", height: "250px" }} />
            </div>
          </div>
          <div className="test-scroll">
            <Carousel autoplay autoplaySpeed={3000} speed={3000}>
              <div className="first-1">
                <div className="star">
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                </div>
                <div className="star-2">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis eaque, nemo nobis culpa voluptatem consequatur neque
                    eius accusantium sapiente optio, natus illum temporibus
                    expedita molestias tempora, iste reiciendis quasi mollitia.
                    Odio ullam hic, inventore consectetur nihil at atque, autem
                    molestias delectus quisquam obcaecati earum amet dignissimos
                    cum aut sapiente nostrum unde vel perspiciatis quos
                    voluptatum esse aliquam maxime quia? Quis consectetur hic,
                    dolore veniam magni, rem cumque esse possimus quos
                    voluptatum illo expedita tempora vel. Sequi, animi tempore
                    sit obcaecati voluptate illo exercitationem voluptas
                    dolorum, nostrum neque eum soluta, fugit modi quasi. Quam
                    odio maiores perspiciatis dolore, itaque a sapiente.
                  </p>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <h3 style={{ color: "#c9f31d" }}>Ashok Verma</h3>
                  <h4 style={{ color: " rgb(174, 176, 179) " }}>
                    MERN Stack Developer
                  </h4>
                </div>
              </div>
              <div className="first-1">
                <div className="star">
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStarHalfAlt
                      style={{ color: "#f5d505 ", fontSize: "22px" }}
                    />
                  </span>
                </div>
                <div className="star-2">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis eaque, nemo nobis culpa voluptatem consequatur neque
                    eius accusantium sapiente optio, natus illum temporibus
                    expedita molestias tempora, iste reiciendis quasi mollitia.
                    Odio ullam hic, inventore consectetur nihil at atque, autem
                    molestias delectus quisquam obcaecati earum amet dignissimos
                    cum aut sapiente nostrum unde vel perspiciatis quos
                    voluptatum esse aliquam maxime quia? Quis consectetur hic,
                    dolore veniam magni, rem cumque esse possimus quos
                    voluptatum illo expedita tempora vel. Sequi, animi tempore
                    sit obcaecati voluptate illo exercitationem voluptas
                    dolorum, nostrum neque eum soluta, fugit modi quasi. Quam
                    odio maiores perspiciatis dolore, itaque a sapiente.
                  </p>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <h3 style={{ color: "#c9f31d" }}>Sunny Sharma</h3>
                  <h4 style={{ color: " rgb(174, 176, 179)" }}>
                    React Developer
                  </h4>
                </div>
              </div>
              <div className="first-1">
                <div className="star">
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaStar style={{ color: "#f5d505 ", fontSize: "22px" }} />
                  </span>
                  <span>
                    <FaRegStar
                      style={{ color: "#f5d505 ", fontSize: "22px" }}
                    />
                  </span>
                </div>
                <div className="star-2">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis eaque, nemo nobis culpa voluptatem consequatur neque
                    eius accusantium sapiente optio, natus illum temporibus
                    expedita molestias tempora, iste reiciendis quasi mollitia.
                    Odio ullam hic, inventore consectetur nihil at atque, autem
                    molestias delectus quisquam obcaecati earum amet dignissimos
                    cum aut sapiente nostrum unde vel perspiciatis quos
                    voluptatum esse aliquam maxime quia? Quis consectetur hic,
                    dolore veniam magni, rem cumque esse possimus quos
                    voluptatum illo expedita tempora vel. Sequi, animi tempore
                    sit obcaecati voluptate illo exercitationem voluptas
                    dolorum, nostrum neque eum soluta, fugit modi quasi. Quam
                    odio maiores perspiciatis dolore, itaque a sapiente.
                  </p>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <h3 style={{ color: "#c9f31d" }}>Pankaj Verma</h3>
                  <h4 style={{ color: "rgb(174, 176, 179) " }}>
                    Full Stack Developer
                  </h4>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="image-test2">
            <div>
              <img
                src={Test3}
                style={{
                  width: "190px",
                  height: "210px",
                  borderTopRightRadius: "90px",
                  borderTopLeftRadius: "90px",
                }}
              />
            </div>
            <div className="sign">
              <PiSignatureDuotone
                style={{ color: "white", fontSize: "70px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="test-last">
        <div className="test-last-1">
          <h2>More than 100+ companies trusted us worldwide</h2>
        </div>
        <div className="test-last-2">
          <div className="test-last-text">
            <span>Walmart</span>
            <span>
              <GiFlowerStar />
            </span>
          </div>
          <div className="test-last-text">
            <span>Linked</span>
            <span>
              <FaLinkedin />
            </span>
          </div>
          <div className="test-last-text">
            <span>Google</span>
          </div>
          <div className="test-last-text">
            <span>
              <IoLogoSlack />
            </span>
            <span>Slack</span>
          </div>
        </div>
      </div>
      <div className="test-last2">
        <div className="test-left">
          <div className="test-left-top">
            <div className="top-left">
              <span style={{ fontStyle: "italic" }}>My Blogs</span>
            </div>
          </div>
          <div className="recent-post">
            <h1>Recent Posts</h1>
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
                    to="/blog"
                    onClick={scrollToTop}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Click More Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="test-right">
          <div className="test-right-1">
            <div className="tr-1">
              <div className="november">
                <span>20, November 2024</span>
              </div>
              <div style={{ paddingTop: "30px", paddingRight: "40px" }}>
                <h2 style={{ fontWeight: "bold" }}>
                  Brand Design That Helps The Company Grow
                </h2>
              </div>
            </div>
            <div className="tr-2">
              <img src={Recent1} />
            </div>
            <div className="tr-3">
              <div className="eye">
                <TiEyeOutline className="eye-icon" />
              </div>
            </div>
          </div>
          <div className="test-right-1">
            <div className="tr-1">
              <div className="november">
                <span>20, November 2024</span>
              </div>
              <div style={{ paddingTop: "30px", paddingRight: "40px" }}>
                <h2 style={{ fontWeight: "bold" }}>
                  Frontend Developer That Helps Company Grow
                </h2>
              </div>
            </div>
            <div className="tr-2">
              <img src={Recent2} />
            </div>
            <div className="tr-3">
              <div className="eye">
                <TiEyeOutline className="eye-icon" />
              </div>
            </div>
          </div>
          <div className="test-right-1">
            <div className="tr-1">
              <div className="november">
                <span>20, November 2024</span>
              </div>
              <div style={{ paddingTop: "30px", paddingRight: "40px" }}>
                <h2 style={{ fontWeight: "bold" }}>
                  Fresh Design Ideas & Inspiration For 2024 Developer
                </h2>
              </div>
            </div>
            <div className="tr-2">
              <img src={Recent3} />
            </div>
            <div className="tr-3">
              <div className="eye">
                <TiEyeOutline className="eye-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
