import { FaLock } from "react-icons/fa";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <FaLock className="privacy-icon" size={32} />
          <h1>Privacy Policy</h1>
        </header>
        <div className="privacy-content">
          <p className="privacy-intro">
            Welcome to Let's Outsource. Your privacy is important to us, and we
            are committed to safeguarding your personal information. This policy
            outlines how we collect, use, and protect your data.
          </p>

          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Your privacy is important to us, and we are committed to
              safeguarding your personal information. This policy outlines how
              we collect, use, and protect your data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>
                Personal identification information (Name, email address, etc.)
              </li>
              <li>Dispatching and booking data related to your services</li>
              <li>
                Technical data (IP address, browser type) for site optimization
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>The information we collect is used for:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing dispatch requests and bookings</li>
              <li>Ensuring smooth system integration with our partners</li>
              <li>Communicating with you regarding updates and promotions</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not share your personal information with third parties
              unless it is necessary for providing our services or if required
              by law.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Security of Your Data</h2>
            <p>
              We implement standard security measures to protect your
              information from unauthorized access. However, we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Your Data Protection Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Please contact us to exercise these rights.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Changes to Our Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be posted here with an updated effective date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
              <a href="mailto:jsher@letsoutsource.com">
                {" "}
                jsher@letsoutsource.com
              </a>
              <a href="mailto:simon@letsoutsource.com">
                {" "}
                simon@letsoutsource.com
              </a>
              <a href="mailto:mgt.letsoutsource@gmail.com">
                {" "}
                mgt.letsoutsource@gmail.com
              </a>
            </p>
          </section>

          <p className="privacy-update">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
