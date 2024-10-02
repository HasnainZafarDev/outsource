"use client";
import React, { useState } from "react";
import "./customerSupportPage.css";

const CustomerSupport = () => {
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
    <div className="customer-support-container">
      <h1 className="title">Customer Support</h1>
      <p className="intro">
        Welcome to the customer support page of Letsoutsource! Our dedicated
        team is here to assist you with any inquiries or issues you may
        encounter. We pride ourselves on providing top-notch support to ensure
        our clients receive the help they need, whenever they need it.
      </p>

      <h2 className="section-title">Our Support Services</h2>
      <ul className="support-list">
        <li>📞 24/7 Live Chat Support</li>
        <li>📧 Email Support with Fast Response Times</li>
        <li>👤 Dedicated Account Managers for Personalized Assistance</li>
        <li>📚 Comprehensive FAQs and Help Center</li>
        <li>🌐 Multi-Language Support Available</li>
      </ul>

      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="form-label">Email:</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="form-label">Subject:</label>
        <input
          className="form-input"
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <label className="form-label">Message:</label>
        <textarea className="form-textarea" 
         name="message"
         placeholder="Message"
         value={formData.message}
         onChange={handleChange}
         required
        ></textarea>

        <button 
        className="form-button"
        type="submit" 
          disabled={isSubmitting}
        >
         {isSubmitting ? "Sending..." : "SEND MESSAGE"}
        </button>
      </form>
      {feedbackMessage && <p>{feedbackMessage}</p>}
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        <blockquote className="testimonial">
          "The support team at Letsoutsource is exceptional! They resolved my
          issue within minutes. Highly recommended!"
          <span className="client-name"> - A Satisfied Customer</span>
        </blockquote>
        <blockquote className="testimonial">
          "Prompt and effective! I felt supported every step of the way."
          <span className="client-name"> - Another Happy Client</span>
        </blockquote>
      </div>
    </div>
  );
};

export default CustomerSupport;
