import React from "react";
import "./ourMission.css";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="our-mission-container">
      {/* Left Content Div */}
      <div className="mission-content">
        <h3 className="mission-title">OUR MISSION</h3>
        <h2 className="mission-subtitle">
          Humanized Call Center Service With Qualified Professionals
        </h2>
        <p className="mission-paragraph">
          Our mission is to empower businesses by providing reliable,
          innovative, and tailored outsourcing solutions that drive efficiency,
          enhance customer satisfaction, and foster long-term growth. We are
          dedicated to being a trusted partner in your success, delivering
          excellence through every service we offer.
        </p>
        <p className="mission-paragraph">
          At Let's Outsource, we pride ourselves on delivering top-tier services
          through our team of highly qualified professionals. Our experts are
          equipped with the knowledge and experience to provide customized
          solutions that meet your business needs. From lead qualification to
          registration updates and satisfaction surveys, every service is
          executed with precision and a commitment to excellence.
        </p>
        <ul className="mission-list">
          <li>
            <FaCheckCircle className="tick-icon" /> LEAD QUALIFICATION
          </li>
          <li>
            <FaCheckCircle className="tick-icon" /> REGISTRATION UPDATE
          </li>
          <li>
            <FaCheckCircle className="tick-icon" /> SATISFICTION SURVEY
          </li>
        </ul>
      </div>

      {/* Right Image Div */}
      <div className="mission-image-div">
        <Image
        className="mission-image"
          src="/male-call-centre-worker.jpg"
          alt="Our Mission"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
};

export default OurMission;
