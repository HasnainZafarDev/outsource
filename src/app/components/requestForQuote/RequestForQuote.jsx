import React from "react";
import "./requestForQuote.css";
import Image from "next/image";

const RequestForQuote = () => {
  return (
    <div className="request-quote-section">
      {/* First Section */}
      <div className="image-section">
        <Image
          src="/woman-standing.png"
          alt="Request For Quote"
          width={450}
          height={700}
          style={{ marginBottom: "-5px" }}
        />
      </div>

      {/* Second Section: Form */}
      <div className="form-section">
        <form className="quote-form">
          <h2>REQUEST FOR A QUOTE</h2>
          <div className="input-row">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="input-row">
            <input
              type="text"
              placeholder="Subject"
              className="input-full-width"
            />
          </div>
          <div className="input-row">
            <textarea
              placeholder="Message"
              className="input-full-width textarea-field"
            ></textarea>
          </div>
          <button type="submit" className="quote-button">
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Third Section*/}
      <div className="first-section">
        <h1 className="section-title">
          See Why You Should Choose <br />LetsOutsource
        </h1>
        <p className="section-description">
          Lets Outsource provides efficient outsourcing solutions for taxi
          booking services, customer support, and supply management. We ensure
          smooth operations, allowing you to focus on expanding your business.
        </p>

        <div className="tick-item">
          <Image
            className="tick-image"
            src="/tick.png"
            alt="Tick"
            width={40}
            height={40}
            style={{ marginRight: "20px" }}
          />
          <div className="tick-content">
            <h3>Experienced</h3>
            <p>
              We provide experienced operators and dispatchers for taxi booking
              services, ensuring smooth operations while you focus on business
              growth.
            </p>
          </div>
        </div>

        <div className="tick-item">
          <Image
            className="tick-image"
            src="/tick.png"
            alt="Tick"
            width={40}
            height={40}
            style={{ marginRight: "20px" }}
          />
          <div className="tick-content">
            <h3>Cost Effective</h3>
            <p>
              We provide experienced operators and dispatchers for taxi booking
              services at a low cost per hour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForQuote;
