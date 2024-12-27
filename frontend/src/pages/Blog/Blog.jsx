import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import Blog4 from "../../assets/blog4.png";
import Post1 from "../../assets/post1.png";
import Post2 from "../../assets/post2.png";
import Post3 from "../../assets/post3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";

const Blog = () => {
  const scrollToTop1 = () => {
    const scrollableDiv = document.querySelector(".blog-left");
    scrollableDiv.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const ScrollToTop = () => {
    scrollToTop1();
    scrollToTop2();
  };
  const scrollTopDetail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog">
          <div>
            <h1 style={{ color: "white" }}>Blog Standard</h1>
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
                Blog Standard
              </Link>
            </span>
          </div>
        </div>
        <div className="blog-main">
          <div className="blog-left">
            <div className="blog-list">
              <div>
                <img src={Blog1} />
              </div>
              <div className="news">
                <span>NEWS </span>{" "}
                <span style={{ color: "rgb(174, 176, 179)" }}>
                  . October 19, 2024
                </span>
              </div>
              <div className="brand">
                <h1>Brand Design That Helps The Company</h1>
                <h1>Grow</h1>
                <hr />
              </div>
              <div className="p-tag">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="read-more">
                <Link to="/blog-detail" onClick={scrollTopDetail}>
                  Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
                </Link>
              </div>
            </div>
            <div className="blog-list">
              <div>
                <img src={Blog2} />
              </div>
              <div className="news">
                <span>NEWS </span>{" "}
                <span style={{ color: "rgb(174, 176, 179)" }}>
                  . October 19, 2024
                </span>
              </div>
              <div className="brand">
                <h1>Fresh design ideas & inspiration for 2023</h1>

                <hr />
              </div>
              <div className="p-tag">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="read-more">
                <Link to="/blog-detail" onClick={scrollTopDetail}>
                  Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
                </Link>
              </div>
            </div>
            <div className="blog-list">
              <div>
                <img src={Blog3} />
              </div>
              <div className="news">
                <span>NEWS </span>{" "}
                <span style={{ color: "rgb(174, 176, 179)" }}>
                  . October 19, 2024
                </span>
              </div>
              <div className="brand">
                <h1>Brand Design That Helps The Company</h1>
                <h1>Grow</h1>

                <hr />
              </div>
              <div className="p-tag">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="read-more">
                <Link to="/blog-detail" onClick={scrollTopDetail}>
                  Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
                </Link>
              </div>
            </div>
            <div className="blog-list">
              <div>
                <img src={Blog4} />
              </div>
              <div className="news">
                <span>NEWS </span>{" "}
                <span style={{ color: "rgb(174, 176, 179)" }}>
                  . October 19, 2024
                </span>
              </div>
              <div className="brand">
                <h1>Fresh design ideas & inspiration for 2023</h1>

                <hr />
              </div>
              <div className="p-tag">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="read-more">
                <Link to="/blog-detail" onClick={scrollTopDetail}>
                  Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
                </Link>
              </div>
            </div>
            <div className="next-btn">
              <div className="btn1">
                <button onClick={ScrollToTop}>1</button>
              </div>
              <div className="btn1">
                <button onClick={ScrollToTop}>2</button>
              </div>
              <div className="btn1">
                <button onClick={ScrollToTop}>3</button>
              </div>
              <div className="btn1">
                <button onClick={ScrollToTop}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className="blog-right">
            <div className="blog-function">
              <div className="search">
                <h3>Search</h3>
                <hr />
                <div className="search-input">
                  <input type="search" placeholder="Search" />
                  <div className="icon">
                    <HiOutlineSearch style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
              <div className="categories">
                <div className="cat-1">
                  <h3>Categories</h3>
                  <hr />
                </div>
                <div className="cat-2">
                  <p>Creative</p>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="cat-2">
                  <p>Business</p>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="cat-2">
                  <p>Design</p>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="cat-2">
                  <p>Marketing</p>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </div>
                <div className="cat-2">
                  <p>Lifestyle</p>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="recent-post">
                <div className="post-1">
                  <h3>Recent Post</h3>
                  <hr />
                </div>
                <div className="post-2">
                  <div className="post-img">
                    <img src={Post1} />
                  </div>
                  <div className="post-3">
                    <div>
                      <h5>The Man Thing For Designer </h5>
                    </div>
                    <div className="post-date">
                      <span>
                        <MdOutlineWatchLater />
                      </span>
                      <span></span>
                      <span></span> <span>October 20, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="post-2">
                  <div className="post-img">
                    <img src={Post2} />
                  </div>
                  <div className="post-3">
                    <div>
                      <h5>He Service Provide For Design </h5>
                    </div>
                    <div className="post-date">
                      <span>
                        <MdOutlineWatchLater />
                      </span>
                      <span></span>
                      <span></span> <span>October 20, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="post-2">
                  <div className="post-img">
                    <img src={Post3} />
                  </div>
                  <div className="post-3">
                    <div>
                      <h5>The Man Thing For Designer </h5>
                    </div>
                    <div className="post-date">
                      <span>
                        <MdOutlineWatchLater />
                      </span>
                      <span></span>
                      <span></span> <span>October 20, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tag">
                <div className="tag-1">
                  <h3>Tag</h3>
                  <hr />
                </div>
                <div className="tag-btn">
                  <button>BUSINESS</button>
                  <button>DIGITAL</button>
                  <button>AUDIO POST</button>
                </div>
                <div className="tag-btn2">
                  <button>GALLERY POST</button>
                  <button>MARKETING</button>
                </div>
                <div className="tag-btn3">
                  <button>AGENCY</button>
                  <button>GRAPHIC</button>
                </div>
                <div className="tag-btn4">
                  <button>WEB DEVELOPMENT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
