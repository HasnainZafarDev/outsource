"use client";
import React from "react";
import "./humanizedServices.css";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HumanizedServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const card1Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  const card2Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3
        
      },
    },
  };
  const card3Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };
  return (

    <div className="humanized-services">
      <h4 className="small-title">HUMANIZED SERVICES</h4>
      <h2 className="large-subtitle">
        Some Of Our Individual Approach Services For Better 
        Assertiveness
      </h2>
      <p className="description">
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div
        className="humanized-cards-section"
       
      >
        <motion.div className="card" 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={card1Variants}
        >
          <h3 className="card-title">
            Recurring <br /> Charges
          </h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="card-button">READ MORE</button>
        </motion.div>

        <motion.div className="card"  ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={card2Variants}>
          <h3 className="card-title">
            Email & SMS <br />
            Channels
          </h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="card-button">READ MORE</button>
        </motion.div>

        <motion.div className="card"  ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={card3Variants}>
          <h3 className="card-title">
            Service <br />
            channels
          </h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="card-button">READ MORE</button>
        </motion.div>
      </div>

    </div>
  );
};

export default HumanizedServices;
