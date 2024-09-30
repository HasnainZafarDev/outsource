"use client"
import React from "react";
import "./aboutUs.css";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
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
        delay:0.3
      },
    },
  };
  return (
    <div className="about-us-container">
      {/* Left Div */}
      <div className="about-us-left">
        <h1 className="about-title">About Lets Outsource</h1>
        <p className="about-para">
          Welcome to Let's Outsource, your trusted partner in achieving
          operational excellence. As a premier outsourcing company, we are more
          than just a service provider – we are a dedicated team committed to
          empowering your business with tailored solutions that align with your
          goals. With a deep understanding of your unique challenges, we go
          beyond meeting expectations. We strive to exceed them, providing
          innovative strategies that address both your current and future needs.
        {/* </p> */}
        {/* <p className="about-para"> */}
          Customer satisfaction is not merely a metric for us; it's a core value
          that drives every aspect of our operations. Our team operates within a
          culture of continuous improvement, where every interaction is viewed
          as an opportunity to deliver exceptional value. Through rigorous
          training and ongoing monitoring, we ensure that every service we
          provide is of the highest quality, making your success our top
          priority.
        </p>
        <br />
        <p className="director">SAC Director</p>
        <p className="director-name">Victor Salummi</p>
      </div>

      {/* Right Div */}
      <div className="about-us-right">
        {/* Card 1 */}
        <motion.div className="about-us-card" ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={card1Variants}>
          <Image
            src="/time.png"
            alt="Customer Service"
            className="card-image"
            width={80}
            height={80}
          />
          <h3 className="card-title">Support 24/7</h3>
          <p className="card-para">
            At Lets Outsource, we understand the importance of timely support.
            Our team is available around the clock to provide the assistance you
            need, whenever you need it. Whether it's a technical issue or an
            operational challenge, we're here to help you every step of the way
          </p>
          <button className="card-btn">READ MORE</button>
        </motion.div>

        {/* Card 2 */}
        <motion.div className="about-us-card" ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={card2Variants}>
          <Image
            src="/robust-help.png"
            alt="Expert Team"
            className="card-image"
            width={80}
            height={80}
          />
          <h3 className="card-title">Robust Help</h3>
          <p className="card-para">
            Our commitment to excellence extends beyond just providing support.
            We offer robust, comprehensive help designed to address any and all
            challenges your business may face. From strategic planning to
            execution, our experts are ready to guide you towards success.
          </p>
          <button className="card-btn">READ MORE</button>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
