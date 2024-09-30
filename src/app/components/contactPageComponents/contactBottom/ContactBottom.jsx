"use client";
import React from "react";
import "./contactBottom.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CustomShapeIcon from "@/utils/CustomShapeIcon";

const ContactBottom = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const contactCardVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="contact-bottom-section">
      <CustomShapeIcon className="svg-image"/>
      <motion.div
        className="card"
        ref={ref}
        initial="hidden"
        variants={contactCardVariants}
        animate={inView ? "visible" : "hidden"}
      >
        <h1>
          Improvise Communication With Your Customers In A Professional Way​
        </h1>
        <p>
          We are the best in market, known for our professionalism, highest
          paying employer, trusted and reliable outsourcing partner for your
          business.
        </p>
        <button className="contact-btn">GET IN TOUCH</button>
      </motion.div>
    </div>
  );
};

export default ContactBottom;
