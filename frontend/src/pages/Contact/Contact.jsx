import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ShowToast, Severty } from "../../helpers/toast";

const Contact = () => {
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
          "https://portfolio-website-74ap.onrender.com/api/users",
          values
        );
        ShowToast("Comment successfully", Severty.SUCCESS);
        resetForm();
      } catch (error) {
        ShowToast("Failed to Commit", Severty.ERROR);
      }
    },
  });
  return (
    <>
      <div className="contact">
        <div>
          <h1 style={{ color: "white" }}>Let's Start Something</h1>
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
              Let's Start Something
            </Link>
          </span>
        </div>
      </div>
      <div className="main-contact">
        <div className="contact1">
          <div className="contact1-form">
            <h2>Leave A Reply</h2>
            <p style={{ color: "rgb(174, 176, 179)" }}>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div>
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

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "white" }}>{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <textarea
                  name="comment"
                  placeholder="Write Comment"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div style={{ color: "white" }}>{formik.errors.comment}</div>
                ) : null}
              </div>

              <div>
                <button type="submit">Submit Comment</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact2">
          <div className="feel">
            <h3>Feel Free To Contact Me Anytime</h3>
          </div>
          <div className="email-feel">
            <label>Email</label>
            <h5>ak228308@gmail.com</h5>
          </div>
          <div className="email-feel">
            <label>Phone</label>
            <h5>+91-9636366250</h5>
          </div>
          <div className="email-feel">
            <label>Address</label>
            <h5>KV 5 Mansarovar Jaipur</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
