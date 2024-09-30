import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="description">
          <h2>
            <span style={{ color: "#fa721b" }}>Lets</span>Outsource
          </h2>
          <p>
            We value transparency, integrity & open <br /> communication in
            building lasting client <br /> relationships.
          </p>
          <div className="footer-social">
            <Link
              href="https://www.facebook.com/letsoutsourceSMC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="footer-social-link" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="footer-social-link" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/let-s-outsource-smc-pvt-ltd/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-social-link" />
            </Link>
          </div>
          <p className="large-screen-description-privacy">
            <span>Privacy Policy</span> | <span>Terms & Conditions</span>
          </p>
        </div>

        <div className="footer-section">
          <h2>Menu</h2>
          <div className="section-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </div>
        </div>

        <div className="footer-section">
          <h2>Service</h2>
          <div className="section-links">
            <li>
              <Link href="/ourservices/taxibookingservices">Taxi Booking Services</Link>
            </li>
            <li>
              <Link href="/ourservices/customersupport">Customer Service</Link>
            </li>
            <li>
              <Link href="/ourservices/outsourcingservices">Outsourcing services</Link>
            </li>
          </div>
        </div>

        <div className="footer-section">
          <h2>More Links</h2>
          <div className="section-links">
            <li>
              <Link href="/contact">Live Chat Support</Link>
            </li>
            <li>
              <Link href="/contact">Email support</Link>
            </li>
          </div>
        </div>
        
        <p className="small-screen-description-privacy">
          <span>Privacy Policy</span> | <span>Terms & Conditions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
