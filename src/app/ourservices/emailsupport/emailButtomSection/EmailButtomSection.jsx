import React from "react";
import "./emailButtomSection.css";
import { FaUsers, FaCogs, FaBriefcase, FaClock } from "react-icons/fa";

const EmailButtomSection = () => {
  return (
    <div className="email-bottom-section">
      
      <div className="section-item">
        <FaUsers className="icon" />
        <h3>400+</h3>
        <p>Number of Employees</p>
      </div>

      <div className="section-item">
        <FaCogs className="icon" />
        <h3>06</h3>
        <p>Services We Offer</p>
      </div>

      <div className="section-item">
        <FaBriefcase className="icon" />
        <h3>30+</h3>
        <p>Number of Clients</p>
      </div>

      <div className="section-item">
        <FaClock className="icon" />
        <h3>05+</h3>
        <p>Years of Experience</p>
      </div>
    </div>
  );
};

export default EmailButtomSection;
