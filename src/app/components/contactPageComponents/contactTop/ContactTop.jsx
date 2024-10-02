"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./contactTop.css";

const ContactTop = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.message == "Email sent successfully") {
        setFeedbackMessage("Message sent successfully!");
      } else {
        setFeedbackMessage("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setFeedbackMessage("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-top-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="card">
          <div className="card-left">
            <Image
              src="/man-talking.png"
              alt="Contact Image"
              width={400}
              height={560}
              className="contact-image"
            />
          </div>
          <div className="card-right">
            <div className="info-block">
              <h4>Address</h4>
              <p>
                D739 Arbab Street, Block D, 5th Road Commercial market
                Rawalpindi
              </p>
            </div>
            <div className="info-block">
              <h4>Email</h4>
              <p>jsher@letsoutsource.co.uk</p>
            </div>
            <div className="info-block">
              <h4>Phone</h4>
              <p>01623 396 943</p>
            </div>
            <div className="info-block">
              <h4>Opening Hours</h4>
              <p>
                Monday - Sunday <br /> 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h5>Talk To Us</h5>
        <h2>How Can We Help Your Business To Grow?</h2>
        <p>Please feel free to contact our 24/7 support number.</p>
        <p className="support-phone">01623 396 943</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs-first-row">
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input-full-width"
          />
          <textarea
            className="message-area"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button 
          className="send-button" 
          type="submit" 
          disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>
    </div>

    // </div>
  );
};

export default ContactTop;
