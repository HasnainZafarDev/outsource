"use client";
import React from "react";

import "./seeAboutServices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomShapeIcon from "@/utils/CustomShapeIcon";

const SeeAboutServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const servicesCardVariants = {
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
    <div className="about-services-section">
      <CustomShapeIcon className="svg-image"/>
      <motion.div
        className="card"
        ref={ref}
        initial="hidden"
        variants={servicesCardVariants}
        animate={inView ? "visible" : "hidden"}
      >
        <h1>Do You Want To Know More About Our Services? Contact Us</h1>
        <p>
          We’re here to help! If you have any questions or need more information
          about how our services can benefit your business, don’t hesitate to
          reach out. Our team is ready to assist you.
        </p>
        <button className="services-btn">SEE SERVICES</button>
      </motion.div>
    </div>
  );
};

export default SeeAboutServices;
