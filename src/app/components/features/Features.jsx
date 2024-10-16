import React from "react";
import "./features.css";
import Image from "next/image";

const Features = () => {
  return (
    <div className="features-section">
      <div className="content-section">
        
        <div className="left-content">
          <h3 className="small-title">FEATURES</h3>
          <h2 className="subtitle">
            Affordable, Expert Outsourcing <br /> Solutions for Your Business
          </h2>
        </div>

        <div className="right-content">
          <p className="description">
            At Lets Outsource, we specialize in providing affordable and expert
            outsourcing solutions tailored to your business needs. Our
            experienced operators and dispatchers ensure smooth operations in
            areas like taxi booking and customer support, allowing you to focus
            on what you do best—growing your business 🙂
          </p>
        </div>
      </div>

      <div className="cards-section">
        <div className="card">
          <h1>.01</h1>
          <h2>Customer Care & Support</h2>
          <p>
            Exceptional customer care to boost satisfaction and enhance
            long-term customer loyalty.
          </p>
          <Image
            src="/headset.jpg"
            alt="Image 1"
            className="overlapping-image"
            width={480}
            // height={250}
            height={350}
          />
        </div>
        <div className="card">
          <h1>.02</h1>
          <h2>Technical Support</h2>
          <p>
            Reliable technical support that swiftly resolves issues and keeps
            your operations running smoothly.
          </p>
          <Image
            src="/female-agent.jpg"
            alt="Image 2"
            className="overlapping-image"
            width={480}
            // height={250}
            height={350}
          />
        </div>
        <div className="card">
          <h1>.03</h1>
          <h2>24/7 Availability</h2>
          <p>
            Round-the-clock support to ensure your business operates efficiently
            and is always up and running
          </p>
          <Image
            src="/smiling-businesswoman.jpg"
            alt="Image 3"
            className="overlapping-image"
            width={480}
            // height={250}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
