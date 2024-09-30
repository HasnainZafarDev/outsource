"use client";
import React from "react";
import {
  FaAngleRight,
  FaBroadcastTower,
  FaHeadphones,
  FaMailBulk,
  FaTaxi,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import "./ourServices.css";
import { useInView } from "react-intersection-observer";
import { delay, motion } from "framer-motion";

const OurServices = () => {
  const createServicesVariants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      },
    },
  });
  2;
  const services = [
    {
      id: 1,
      title: "Taxi Booking Services",
      description:
        "Streamline your transportation needs with our advanced booking and dispatching solutions.",
      icon: <FaTaxi />,
    },
    {
      id: 2,
      title: "Outsourcing Services",
      description:
        "Optimize your operations with our professional outsourcing services.",
      icon: <FaBroadcastTower />,
    },
    {
      id: 3,
      title: "Remote Staff Hiring",
      description:
        "Find the best remote talent to enhance your business efficiency.",
      icon: <HiUserGroup />,
    },
    {
      id: 4,
      title: "Customer Support",
      description:
        "Ensure exceptional customer experiences with our dedicated support team..",
      icon: <FaHeadphones />,
    },
    {
      id: 5,
      title: "Email Support Services",
      description:
        "Professional and timely email handling to keep your clients satisfied.",
      icon: <FaMailBulk />,
    },
    {
      id: 6,
      title: "Live Chat Support",
      description:
        "Real-time chat support to engage and assist your website visitors",
      icon: <IoChatbubblesOutline />,
    },
  ];

  return (
    <div className="our-services-container">
      {services.map((service, index) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        const variants = createServicesVariants(index * 0.3);
        return (
          <motion.div
            key={service.id}
            className="service-card"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <div className="icon-circle">
              <span className="card-icon">{service.icon}</span>{" "}
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p>{service.description}</p>
            <div className="arrow-circle">
              <FaAngleRight className="arrow-icon" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OurServices;
