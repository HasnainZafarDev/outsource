"use client";
import React, { useState } from "react";
import "./homeSection.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useVideoContext } from "../../context/VideoContext";

import { useRouter } from "next/navigation";

const HomeSection = () => {
  const router = useRouter();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { currentVideo, setCurrentVideo } = useVideoContext();
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
  const videos = ["/backgroundVideo.mp4", "/backgroundVideo2.mp4"];

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const videoClass = currentVideo === 0 ? "video1" : "video2";

  const handleNavigation = () => {
    router.push("contact");
  };
  return (
    <div className="home-section">
      <div className={`home-content ${videoClass}`}>
        <video
          autoPlay
          muted
          playsInline
          className="background-video"
          onEnded={handleVideoEnd}
          src={videos[currentVideo]}
        >
          Your browser does not support the video tag.
        </video>

        <motion.div
          className="text-content"
          ref={ref}
          initial="hidden"
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <p className="heading">SAVE 80% ON STAFF WAGES EXPENSES</p>
          <h1 className="subheading">
            Your Perfect Partner for <br />
            Outsourcing Solutions!
          </h1>
          <p className="paragraph1">
            Established in 2019, Let's Outsource is dedicated to providing
            top-notch support and outsourcing services tailored to meet your
            unique business needs. Whether you need reliable taxi booking and
            dispatching, efficient remote staff hiring, or comprehensive
            customer support, we've got you covered.
          </p>
          <p className="paragraph2">
            Our expertise extends to multiple dispatch systems, including
            iCabbi, AutoCab, CabTreasure, Cordic, Cab9, and many more! As an
            official partner of iCabbi, we ensure seamless integration and
            exceptional service delivery, helping your business thrive in a
            competitive landscape. Trust us to elevate your operations with our
            specialized solutions and industry knowledge.
          </p>
          <button className="quote-button" onClick={handleNavigation}>
            REQUEST A QUOTE
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
