import React from "react";
import "./liveChatSupport.css";
import { FaChartLine, FaExpandAlt, FaLightbulb } from "react-icons/fa";
import Link from "next/link";

const LiveSupportPage = () => {
  return (
    <div className="live-support-page">
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Elevate Your Customer Experience with Real-Time Live Chat</h1>
            <p>
              Instant, personalized customer support, powered by AI and driven
              by human touch, 24/7.
            </p>
            <Link href="/contact" className="cta-link">Explore Our Solutions</Link>
          </div>
        </div>
      </header>

      <section className="why-us">
        <h2 className="section-heading">Why Partner with Let's Outsource?</h2>
        <div className="why-us-content">
          <div className="why-us-item">
            <FaChartLine size={60} color="#fa721b" />
            <h3>Data-Driven Insights</h3>
            <p>
              We analyze every interaction to provide actionable insights that
              help you understand your customers better
            </p>
          </div>
          <div className="why-us-item">
            <FaExpandAlt size={60} color="#fa721b" />
            <h3>Scalable Solutions</h3>
            <p>
              Whether you’re a startup or a global enterprise, our support
              scales with your business needs.
            </p>
          </div>
          <div className="why-us-item">
            <FaLightbulb size={60} color="#fa721b" />
            <h3>Innovation at the Core</h3>
            <p>
              We bring the latest tech innovations to your customer support,
              ensuring your business stays ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-div">
        <p>
          &copy; 2024 Let's Outsource. Redefining Customer Support for Modern
          Businesses.
        </p>
      </footer>
    </div>
  );
};

export default LiveSupportPage;
