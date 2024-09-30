
import React from "react";
import "./globals.css";
import Link from "next/link";

const NotFound = () => {

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        We Apologize For The Inconvenience. However, The Page You Are Trying To
        Access Does Not Exist.
      </p>
      <Link className="not-found-link" href="/">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
