"use client";
import React from "react";
import "./ourVision.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurVision = () => {
  const visionCards = [
    {
      icon: "/icon1.png",
      title: "Customer Service",
      description:
        "Delivering exceptional customer service is at the heart of what we do. We ensure your customers receive the support they need, when they need it.",
    },
    {
      icon: "/icon2.png",
      title: "Qualified Team",
      description:
        "Our team is composed of highly skilled professionals dedicated to providing top-tier outsourcing solutions tailored to your needs.",
    },
    {
      icon: "/icon3.png",
      title: "Cutting-edge Technology",
      description:
        "We leverage the latest technology to optimize processes, ensuring efficiency, accuracy, and innovation in every service we deliver.",
    },
    {
      icon: "/icon4.png",
      title: "Customer Commitment",
      description:
        "We are committed to your success. Every interaction is an opportunity to build trust and exceed your expectations.",
    },
  ];
  const cardVariants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="our-vision-container">
      {/* Top Section */}
      <div className="our-vision-top">
        {/* Left Div (Content) */}
        <div className="vision-content">
          <h3 className="vision-title">OUR VISION</h3>
          <h1 className="vision-subtitle">
            Our Purpose Is To Improve Communication With Your Customers
          </h1>
          <p className="vision-para">
            Our purpose is to enhance communication with your customers. We
            strive to be the global leader in business process outsourcing,
            recognized for our commitment to client success, innovation, and
            excellence.
          </p>
          <button className="vision-btn">LEARN MORE</button>
        </div>

        {/* Right Div (Image) */}
        <div className="vision-image">
          <Image
            src="/busy-staff.jpg"
            alt="Vision Image"
            className="image"
            height={400}
            width={700}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="vision-bottom">
        {visionCards.map((card, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              className="vision-card"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants(index * 0.2)}
              key={index}
            >
              <Image
                src={card.icon}
                alt="Icon"
                className="card-image"
                width={60}
                height={60}
              />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-para">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurVision;
