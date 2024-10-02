"use client"
import React from "react";
import "./homeSection.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HomeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const textVariants = {
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
  
  return (
    <div className="home-section">
      <div className="home-content">
        <motion.div className="text-content"
        ref={ref}
        initial="hidden"
        variants={textVariants}
        animate={inView ? "visible" : "hidden"}
        >
          <p className="heading">SAVE 80% ON STAFF WAGES EXPENSES</p>
          <h1 className="subheading">
            Ideal Outsourcing <br />
            Solution Provider For <br />
            Your Business
          </h1>
          <p className="paragraph">
            Established in October 2020, Let's Outsource is dedicated to
            providing top-notch support and outsourcing services tailored to
            meet your unique business needs.Whether you need reliable taxi
            booking and dispatching,efficient remote staff hiring,or
            comprehensive customer support,we've got you covered.
          </p>
          <button className="quote-button">REQUEST A QUOTE</button>
        </motion.div>

        <div className="image-container">
          <div className="circle"></div>
          <Image src="/women.png" alt="Outsourcing" className="home-image" width={280} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
