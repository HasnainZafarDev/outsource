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
            OPTIMIZE YOUR COMPANY'S CREDIT <br /> RECOVERY RESULTS
          </h2>
        </div>

        <div className="right-content">
          <p className="description">
            Ut tristique et egestas quis ipsum suspendisse ultrices gravida
            dictum. At risus viverra adipiscing at in tellus. Nisl nunc
            mi ipsum faucibus vitae 
            aliquet nec. Blandit libero volutpat sed cras ornare arcu dui
            vivamus arcu.
          </p>
        </div>
      </div>

      <div className="cards-section">
        <div className="card">
          <h1>.01</h1>
          <h2>Customer Care & Support</h2>
          <p>
            Nisi quis eleifend quam adipiscing vitae proin sagittis. Cursus
            vitae congue mauris rhoncus aenean.
          </p>
          <Image
            src="/headset.jpg"
            alt="Image 1"
            className="overlapping-image"
            height={260}
            width={335}
          />
        </div>
        <div className="card">
          <h1>.02</h1>
          <h2>Technical Support</h2>
          <p>
            Nisi quis eleifend quam adipiscing vitae proin sagittis. Cursus
            vitae congue mauris rhoncus aenean.
          </p>
          <Image
            src="/female-agent.jpg"
            alt="Image 2"
            className="overlapping-image"
            height={260}
            width={335}
          />
        </div>
        <div className="card">
          <h1>.03</h1>
          <h2>Medical Billing</h2>
          <p>
            Nisi quis eleifend quam adipiscing vitae proin sagittis. Cursus
            vitae congue mauris rhoncus aenean.
          </p>
          <Image
            src="/smiling-businesswoman.jpg"
            alt="Image 3"
            className="overlapping-image"
            height={260}
            width={335}
          />
        </div>
      </div>

    </div>
  );
};

export default Features;
