import React from "react";
import "./BlogDetail.css";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/blog1.png";
import Blog5 from "../../assets/blog5.png";
import Post1 from "../../assets/post1.png";
import Post2 from "../../assets/post2.png";
import Post3 from "../../assets/post3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ShowToast, Severty } from "../../helpers/toast";

const BlogDetail = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      comment: Yup.string()
        .required("Comment is required")
        .min(5, "Comment must be at least 5 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://localhost:5500/api/users",
          values
        );
        ShowToast("User Comment successfully", Severty.SUCCESS);
        resetForm();
      } catch (error) {
        ShowToast("Failed to Comment User", Severty.ERROR);
      }
    },
  });
  return (
    <>
      <div className="blog-container2">
        <div className="blog2">
          <div>
            <h1 style={{ color: "white" }}>
              Brand Design That Helps The
              <br /> Company Grow
            </h1>
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
                Brand design that helps the company grow
              </Link>
            </span>
          </div>
        </div>
        <div className="blog-main2">
          <div className="blog-left2">
            <div className="blog-list2">
              <div>
                <img src={Blog1} />
              </div>
              <div className="news2">
                <span>
                  By: admin / Lifestyle / Posted on September 19, 2023 /
                  Comments: 0
                </span>
                <hr />
              </div>

              <div className="p-tag2">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a Lorem
                  Ipsum, you need to be sure there isn't anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum the Internet
                  tend to repeat predefined chunks as necessary,
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci
                  velit, sed quia non numquam eius modi tempora incidunts ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem the corporis
                  suscipit laboriosam, nisi ut aliquid
                </p>
              </div>
              <div className="read-more2">
                <FaQuoteLeft style={{ color: "black" }} />
                <div className="read-p">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    adipisci velit, sed quia non numquam
                  </p>
                </div>
                <Link style={{ color: "black" }}>Ashok Kumar Verma</Link>
              </div>
              <div className="read-more3">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam,
                </p>
              </div>
              <div>
                <h1>Ashok Is The Only Theme You Will Ever Need</h1>
              </div>
              <div className="blog5">
                <img src={Blog5} />
              </div>
              <div className="blog6">
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as from these
                  cases are perfectly simple and easy to distinguish. In a free
                  hour,
                </p>
              </div>
              <div className="blog7">
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain,
                </li>
                <li>
                  On the other hand, we denounce with righteous indignation and
                  dislike
                </li>
              </div>
              <div className="blog8">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem
                </p>
              </div>
              <div className="blog-media">
                <div className="media1">
                  <div>
                    <h5>Posted in:</h5>
                  </div>
                  <div>
                    <button>BUSINESS</button>
                  </div>
                  <div>
                    <button>DIGITAL</button>
                  </div>
                </div>
                <div className="media2">
                  <div style={{ paddingRight: "20px" }}>
                    <h5>Share:</h5>
                  </div>
                  <div className="icon-blog">
                    <span>
                      <LiaFacebook />
                    </span>
                    <span>
                      <SlSocialTwitter />
                    </span>
                    <span>
                      <CiLinkedin />
                    </span>
                    <span>
                      <CiYoutube />
                    </span>
                  </div>
                </div>
              </div>
              <div className="blog-contact">
                <div>
                  <h1>Leave a Reply</h1>
                </div>
                <div>
                  <p style={{ color: "rgb(174, 176, 179)" }}>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="commit">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div style={{ color: "white" }}>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="commit">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: "white" }}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="commit">
                    <textarea
                      name="comment"
                      placeholder="Write Comment"
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                      <div style={{ color: "white" }}>
                        {formik.errors.comment}
                      </div>
                    ) : null}
                  </div>
                  <div className="commit-btn">
                    <button type="submit">
                      Submit Comment
                      <FaArrowRightLong style={{ marginLeft: "10px" }} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="blog-right">
            <div className="blog-function">
              <div className="search">
                <h3>Search</h3>
                <hr />
                <div className="search-input">
                  <input type="text" placeholder="Search" />
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

export default BlogDetail;
