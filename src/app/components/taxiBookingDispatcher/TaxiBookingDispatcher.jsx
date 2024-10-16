"use client";
import React from "react";
import "./taxiBookingDispatcher.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TaxiBookingDispatcher = () => {
  const cardVariants = (index) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.3,
      },
    },
  });
  const cardsTitles = [
    { title: "Taxi Dispatcher" },
    { title: "Taxi Operator" },
    { title: "CCTV Surveillance" },
    { title: "National Touch" },
    { title: "24/7 Availability" },
    { title: "Cost-Effective" },
  ]

  return (
    <div className="taxi-booking-dispatcher">
      <div className="right-side">
        <p className="title">TAXI BOOKING AND DISPATCHING</p>
        <h2 className="subtitle">
          Taxi Booking and Dispatch Outsouring Solutions by Lets Outsource!
        </h2>
        <p className="description">
          By choosing Lets Outsource for your taxi booking and dispatching
          needs, you can enhance efficiency and reduce operational costs. Our
          dedicated team specializes in outsourcing, providing experienced
          dispatchers and operators to handle the complexities of transportation
          logistics. This allows you to focus on your core business while we
          ensure seamless, reliable services that improve customer satisfaction
          and streamline your operations.
        </p>

        <motion.div className="cards">
          {cardsTitles.map((card, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
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
                <span className="card-number">
                  <IoMdCheckmarkCircleOutline />
                </span>
                <h3>{card.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="left-side">
        <div className="image-container">
          <div className="circle"></div>
          <Image
            src="/women.png"
            alt="Outsourcing"
            className="home-image"
            width={437}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default TaxiBookingDispatcher;
