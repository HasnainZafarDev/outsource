import { FaScroll } from "react-icons/fa";
import "./termsConditions.css";
const TermsAndConditionsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <header className="terms-header">
          <FaScroll className="terms-icon" size={32} />
          <h1>Terms and Conditions</h1>
        </header>
        <div className="terms-content">
          <p className="terms-intro">
            Welcome to Let's Outsource. These terms and conditions outline the
            rules and regulations for the use of our services.
          </p>

          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms and Conditions and all applicable laws and regulations. If
              you do not agree with any part of these terms, you may not use our
              services.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Services</h2>
            <p>
              Let's Outsource provides outsourcing solutions including but not
              limited to taxi booking and dispatching, remote staff hiring, and
              customer support. We reserve the right to modify or discontinue
              any service without notice.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client
              information and data. Our employees are bound by non-disclosure
              agreements to protect your business interests.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All intellectual property rights related to our services,
              including but not limited to software, trademarks, and processes,
              remain the property of Let's Outsource.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              Let's Outsource shall not be liable for any indirect, incidental,
              special, consequential or punitive damages resulting from your use
              of our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction], and you submit to
              the non-exclusive jurisdiction of the state and federal courts
              located in [Your Jurisdiction] for the resolution of any disputes.
            </p>
          </section>

          <p className="terms-update">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
