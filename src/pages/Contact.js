import React, { useRef } from "react";
import { FaAt, FaBuilding, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import PageLoader from "../components/PageLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs
      .sendForm(
        "service_bdvt5xv",
        "template_8v552kr",
        form.current,
        "QwA2etMIIamHKoyeQ"
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
        e.target.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle the error as needed (e.g., display an error message to the user)
      });
  };

  const notify = () => toast("Message Sent!");

  return (
    <>
      <PageLoader />
      <div className="containers">
        <div className="lg:flex my-[150px] justify-between">
          <div className="contact-left">
            <h1>Connect with us and join our mission</h1>
            <div className="contact-email">
              <FaAt className="email-icon" />
              <h3>Email</h3>
            </div>
            <p>admin@arms4ai.com</p>
            <div>
              <FaBuilding className="office-icon" />
              <h3>Office Address:</h3>
            </div>
            <p>Devika Tower, Nehru Place, New Delhi</p>
            <div className="social">
              <a class="" href="https://www.linkedin.com/company/arms4ai/">
                <FaLinkedin className="linkedin-icon" />
              </a>

              <a class="" href="https://twitter.com/Arms4AI1">
                <FaTwitter className="linkedin-icon" />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-form-row">
                <label>First name</label>
                <label>Last name</label>
                <input
                  className="contact-input"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                />
                <input
                  className="contact-input"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="contact-form-row">
                <label className="contact-label-email">Email</label>
                <input
                  className="contact-input email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="contact-form-row">
                <label>Organisation</label>
                <label>Industry</label>
                <input
                  className="contact-input"
                  type="text"
                  name="organization"
                  placeholder="Organisation"
                  required
                />
                <input
                  className="contact-input"
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  required
                />
              </div>
              <div className="contact-form-row">
                <label className="contact-label-message">Message</label>
                <textarea
                  className="contact-input message"
                  type="text"
                  name="message"
                  placeholder="Your message here"
                  required
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="contact-btn"
                style={{ cursor: "pointer" }}
              />
            </form>
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      </div>
    </>
  );
}
