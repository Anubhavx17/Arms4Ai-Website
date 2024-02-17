import React from "react";
import image1 from "../assets/footer-logo 2.png";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containers">
        <div className="footer-flex">
          <div className="footer-logo">
            <img src={image1} alt="arms4ai" />
          </div>
          <div className="footer-link">
            <h6>Links</h6>
            <p>Solutions</p>
            <p>Technology</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className="footer-company">
            <h6>Company</h6>
            <p>About</p>
            <p>Blogs</p>
            <p>News</p>
            <p>Research Articles</p>
          </div>
          <div className="footer-social">
            <h6>Social Links</h6>
            <a class="" href="https://www.linkedin.com/company/arms4ai/">
              <FaLinkedin className="linkedin-icon" />
            </a>

            <a class="" href="https://twitter.com/Arms4AI1">
              <FaTwitter className="linkedin-icon" />
            </a>
            {/* <FaFacebook className="facebook-icon" /> */}
          </div>
          <div className="footer-subs">
            <h6>Subscribe to our Newsletter</h6>
            <input
              className="contact-input"
              type="text"
              name="subscribe"
              placeholder="Enter you mail id"
              required
            />
            <input type="submit" value="Subscribe" className="contact-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
