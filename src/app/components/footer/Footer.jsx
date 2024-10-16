import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="description">
          <h2>
            <span>Lets</span>Outsource
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
            <Link href="/privacypolicy" className="privacy-link">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link href="terms&conditions" className="privacy-link">
              Terms & Conditions
            </Link>
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
              <Link href="/ourservices/taxibookingservices">
                Taxi Booking Services
              </Link>
            </li>
            <li>
              <Link href="/ourservices/customersupport">Customer Service</Link>
            </li>
            <li>
              <Link href="/ourservices/outsourcingservices">
                Outsourcing services
              </Link>
            </li>
          </div>
        </div>

        <div className="footer-section">
          <h2>More Links</h2>
          <div className="section-links">
            <li>
              <Link href="/ourservices/livechatsupport">Live Chat Support</Link>
            </li>
            <li>
              <Link href="/ourservices/emailsupport">Email support</Link>
            </li>
            <li>
              <Link href="/contact/onboardingform">Onboarding Sheet</Link>
            </li>
          </div>
        </div>

        <div className="footer-section">
          <h2>Official Partners</h2>
          <div className="partners-logos">
            <div className="partners-row">
              <Image
                src="/taxi1.png"
                alt="Partner 1 Logo"
                className="partner-logo"
                height={100}
                width={100}
              />
              <Image
                src="/taxi2.png"
                alt="Partner 2 Logo"
                className="partner-logo"
                height={100}
                width={100}
              />
            </div>
            <div className="partners-row">
              <Image
                src="/taxi3.png"
                alt="Partner 3 Logo"
                className="partner-logo"
                height={100}
                width={100}
              />
              <Image
                src="/taxi4.png"
                alt="Partner 4 Logo"
                className="partner-logo"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>

        <p className="small-screen-description-privacy">
          {/* <span>Privacy Policy</span> | <span>Terms & Conditions</span> */}
          <Link href="/privacypolicy" className="privacy-link">
            Privacy Policy
          </Link>
          <span> | </span>
          <Link href="terms&conditions" className="privacy-link">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
