import React from "react";
import "./emailSupportSection2.css";
import Image from "next/image";

const EmailSupportSection2 = () => {
  return (
    <div className="email-support-section2-container">
      <div className="content-container">
        <div className="image-container">
          <Image
            src="/executive-in-call-center.jpg"
            alt="Email Support"
            height={550}
            width={800}
            className="email-image"
          />
        </div>
        <div className="text-content">
          <h2>Perks of Our Email Support Services</h2>
          <p>
            <b className="highlight">Instant Engagement:</b> <br />
            Our email support team connects with customers in real time. This
            service enables your business to initiate meaningful conversations
            with visitors as soon as they arrive on your website.
          </p>
          <p>
            <b className="highlight">Data Collection:</b> <br />
            Every customer is unique, and their behaviors vary. By outsourcing
            your email support to LetOutsource, we gather and analyze data,
            helping you tailor a personalized experience for each visitor
          </p>
          <p>
            <b className="highlight">
              Fosters Stronger, Long-Term Customer Relationships:
            </b>{" "}
            <br />
            etaining customers is essential for your business’s long-term
            success. Our email support services help cultivate these enduring
            relationships by demonstrating that your company genuinely values
            their feedback and satisfaction.
          </p>
          <p>
            <b className="highlight">Cost-Effective Solution:</b> <br />
            Implementing our email support service is an economical choice, as
            it often pays for itself quickly through enhanced conversions and
            revenue growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSupportSection2;
