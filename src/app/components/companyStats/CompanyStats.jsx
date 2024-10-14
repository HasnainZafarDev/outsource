"use client";
import React from "react";
import "./companyStats.css";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CompanyStats = () => {
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardImageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="company-stats">
      {/* First Card - Image */}
      <motion.div
        className="card-image"
        ref={imageRef}
        initial="hidden"
        variants={cardImageVariants}
        animate={imageInView ? "visible" : "hidden"}
      >
        <Image
          src="/woman-in-headset.jpg"
          // src="/random.jpg"
          alt="Company Image"
          className="image"
          height={512}
          width={390}
        />
      </motion.div>

      {/* Second Card - Customers */}
      <motion.div
        className="card"
        ref={cardRef}
        initial="hidden"
        variants={cardVariants}
        animate={cardInView ? "visible" : "hidden"}
      >
        <h3>
          Total Customers <br />
          Served
        </h3>
        <h1>
          {cardInView && (
            <CountUp start={0} end={5.4} duration={2} decimals={1} suffix="M" />
          )}
        </h1>

        <p>
          Our minimum call answer time is 3 seconds. We are operating 365 days a
          year.
        </p>
      </motion.div>

      {/* Third Card - Employees */}
      <motion.div
        className="card"
        ref={cardVariants}
        initial="hidden"
        variants={cardVariants}
        animate={cardInView ? "visible" : "hidden"}
      >
        <h3>
          Total Operating <br />
          Employees
        </h3>
        <h1>
          {cardInView && <CountUp start={0} end={269} duration={2} decimals={0} />}
        </h1>

        <p>
          Total number of employees reflects our team’s strength and operational
          capacity.
        </p>
      </motion.div>
      
    </div>
  );
};

export default CompanyStats;
