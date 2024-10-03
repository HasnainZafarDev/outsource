"use client";
import React from "react";
import {
  FaHandsHelping,
  FaBriefcase,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./outSourcingPage.css";

const OutsourcingPage = () => {
  return (
    <div className="outsource-container">
      {/* Header Section */}
      <motion.div
        className="outsource-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="title">Outsourcing Services</h1>
        <p className="subtitle">
          Efficient, reliable, and cost-effective outsourcing solutions for your
          business needs.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandsHelping className="feature-icon" />
            <h3>Dedicated Support</h3>
            <p>
              Our team provides 24/7 support to ensure your operations run
              smoothly.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase className="feature-icon" />
            <h3>Professional Experts</h3>
            <p>
              Access a global pool of talent to handle specialized tasks for
              your business.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGlobe className="feature-icon" />
            <h3>Global Reach</h3>
            <p>
              Expand your business with our comprehensive outsourcing solutions,
              anywhere in the world.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCheckCircle className="feature-icon" />
            <h3>Quality Assurance</h3>
            <p>
              We ensure top-notch quality with our rigorous checks and balances.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="how-it-works-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="section-title">How We Operate</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <p>Consult with us to outline your needs and requirements.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>
              We connect you with the best-suited professionals for the task.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>
              Our team works with you to ensure smooth delivery of services.
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Receive regular updates and ensure quality results.</p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>
              "Outsourcing with them boosted our productivity and saved a lot of
              resources."
              <br /> <strong>Jessica L.</strong>
            </p>
          </div>
          <div className="testimonial">
            <p>
              "Their professionalism and dedication to quality really stand
              out." <br /> <strong>Mark R.</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OutsourcingPage;
