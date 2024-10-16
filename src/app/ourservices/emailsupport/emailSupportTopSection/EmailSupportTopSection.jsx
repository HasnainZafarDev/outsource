import React from "react";
import "./emailSupportTop.css";
import Image from "next/image";

const EmailSupportTopSection = () => {
  return (
    <div className="email-support-top-container">
      <div className="title-section">
        <h1>Email Support</h1>
      </div>
      <div className="content-container">
        <div className="text-content">
          <p>
            At LetOutsource, we have a dedicated team of trained professionals
            to manage your email communication, ensuring highest level of
            professionalism.
          </p>
          <p>
            With our tailored email support solutions, your business can
            maintain seamless communication with clients, enhance customer
            satisfaction, and focus on core operations while we take care of the
            rest.
          </p>
          <p className="highlight">
            Always Addressing Your Inquiries with Our Email Support
          </p>
          <p>
            Our email support services are efficient, thorough, and
            budget-friendly.
            <br /> <br />
            <b className="highlight">Specialized Email Support Services</b>{" "}
            <br />
            Enhance Customer Experience
            <br />
            Track the latest trends and opportunities
            <br />
            Our email support services elevate customer interactions on your
            platform and ensure timely responses.
          </p>
          <p>
            <b className="highlight">We provide:</b> <br />
            A structured framework tailored for effective email management.
            <br />
            Specialized email support agents who exceed expectations.
            <br />
            Cutting-edge technology to improve customer experience.
            <br />
            Analytics to track the latest trends, opportunities, and performance
            metrics.
          </p>
        </div>
        <div className="image-container">
          <Image
            src="/male-call-centre-worker.jpg"
            alt="Email Support"
            height={600}
            width={800}
            className="email-image"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSupportTopSection;
