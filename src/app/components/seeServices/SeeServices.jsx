"use client";
import React from "react";
import "./seeServices.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CustomShapeIcon from "@/utils/CustomShapeIcon";

const Services = () => {
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
    <div className="services-section">
      <CustomShapeIcon className="svg-image"/>
      <motion.div
        className="card"
        ref={ref}
        initial="hidden"
        variants={servicesCardVariants}
        animate={inView ? "visible" : "hidden"}
      >
        <h1>Learn About Our Solutions, Contact Center & Technology</h1>
        {/* <h1>Learn About Our Solutions, Contact <br/>Center & Technology</h1> */}
        <p>
          Discover our solutions, contact center expertise, and advanced
          technology to drive your business forward. Discover our solutions,
          contact center expertise, and advanced technology to drive your
          business forward.
        </p>
        <button className="services-btn">SEE SERVICES</button>
      </motion.div>
    </div>
  );
};

export default Services;
