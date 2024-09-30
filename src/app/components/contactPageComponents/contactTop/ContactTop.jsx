"use client";
import React from "react";
import Image from "next/image"; 
import "./contactTop.css"; 

const ContactTop = () => {
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
              <p>D739 Arbab Street, Block D, 5th Road Commercial market Rawalpindi</p>
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
              <p>Monday - Sunday <br /> 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h5>Talk To Us</h5>
        <h2>How Can We Help Your Business To Grow?</h2>
        <p>Please feel free to contact our 24/7 support number.</p>
        <p className="support-phone">01623 396 943</p>
        <div className="inputs-first-row">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <input type="text" placeholder="Subject" className="input-full-width" />
        <textarea placeholder="Message" className="message-area"></textarea>
        <button className="send-button">SEND MESSAGE</button>
      </div>

    </div>
  );
};

export default ContactTop;
