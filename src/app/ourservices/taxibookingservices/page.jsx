"use client"
import React from "react";
import { FaMobileAlt, FaMapMarkedAlt, FaCreditCard } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
import "./taxiBookingServices.css";

const TaxiBookingServices = () => {
  return (
    <div className="taxi-booking-container">
      {/* Header Section */}
      <motion.div
        className="taxi-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="title">Taxi Booking Services</h1>
        <p className="subtitle">
          Fast, reliable, and always within reach your go-to solution for taxi bookings.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="section-title">Our Service Features</h2>
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMobileAlt className="feature-icon" />
            <h3>Seamless Booking</h3>
            <p>
              Book a taxi effortlessly via our sleek mobile app or website.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMapMarkedAlt className="feature-icon" />
            <h3>Location Tracking</h3>
            <p>
              Track your driver and estimate arrival time with ease.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCreditCard className="feature-icon" />
            <h3>Flexible Payments</h3>
            <p>
              Multiple payment options for your convenience.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoMdTime className="feature-icon" />
            <h3>Timely Pickups</h3>
            <p>
              We ensure punctuality so you’re never left waiting.
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
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <p>Enter your pickup and destination details.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Select your ride preference and confirm.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Track your driver live and get picked up on time.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Pay via app or cash upon reaching your destination.</p>
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
        <h2 className="section-title">Customer Reviews</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>
              "Incredible service! Booking is fast and easy, and the drivers are
              always prompt."<br /><strong>Sarah K.</strong>
            </p>
          </div>
          <div className="testimonial">
            <p>
              "I love how simple it is to track my driver. No more wondering
              when they'll arrive."<br /><strong>John D.</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TaxiBookingServices;
