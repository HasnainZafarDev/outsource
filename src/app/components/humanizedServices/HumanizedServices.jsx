"use client";
import React from "react";
import "./humanizedServices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HumanizedServices = () => {
  const services = [
    {
      title: "Recurring Charges",
      description:
        "Manage recurring charges effortlessly with automated systems, ensuring seamless payments and reducing manual intervention significantly.",
    },
    {
      title: "Email & SMS Channels",
      description:
        "Reach your audience effectively through integrated email and SMS channels, delivering timely updates and personalized messages.",
    },
    {
      title: "Service Channels",
      description:
        "Streamline customer interactions by offering multiple service channels, ensuring accessibility and fast support across platforms.",
    },
  ];

  const cardVariants = (index) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.3,
      },
    },
  });

  return (
    <div className="humanized-services">
      <h4 className="small-title">HUMANIZED SERVICES</h4>
      <h2 className="large-subtitle">
        Some Of Our Individual Approach Services For Better Assertiveness
      </h2>
      <p className="description">
        Real Human Expertise Driving Effective Solutions
      </p>

      <div className="humanized-cards-section">
        {services.map((service, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              className="card"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants(index)}
            >
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <button className="card-button">READ MORE</button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HumanizedServices;
