"use client";
import React from "react";
import "./taxiBookingDispatcher.css";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const TaxiBookingDispatcher = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardTopVariants = {
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

  const card1Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="taxi-booking-dispatcher">
      <div className="left-side">
        <div className="image-container">
          <Image
            className="dispatcher-image"
            src="/executive-in-call-center.jpg"
            width={437}
            height={600}
            alt="taxi"
            style={{ borderRadius: "8px" }}
          />

          <motion.div
            className="card-top"
            ref={ref}
            initial="hidden"
            variants={cardTopVariants}
            animate={inView ? "visible" : "hidden"}
          >
            <h1>
              {inView && (
                <CountUp start={0} end={10} duration={2} decimals={0} />
              )}
            </h1>
            <p>
              YEARS OF
              <br />
              EXPERIENCE
            </p>
          </motion.div>

          <div className="card-bottom">
            <h3>Humanized call center</h3>
            <p>
              We deliver personalized support with empathetic customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="right-side">
        <p className="title">TAXI BOOKING AND DISPATCHING</p>
        <h2 className="subtitle">
          Efficient Taxi Booking and Dispatching Solutions by Lets Outsource!
        </h2>
        <p className="description">
          At Lets Outsource Ltd, we specialize in efficient taxi booking and
          dispatching solutions tailored to meet your business needs. Our
          services streamline operations, ensuring fast and reliable
          transportation for your customers. With our advanced technology and
          dedicated support, we handle everything from booking to dispatch, so
          you can focus on growing your business while we take care of the
          operations.
        </p>

        <motion.div className="cards">
          <motion.div
            className="card"
            ref={ref}
            initial="hidden"
            variants={card1Variants}
            animate={inView ? "visible" : "hidden"}
          >
            <span className="card-number">.01</span>
            <h3>Low cost</h3>
            <p>We offer services at a low cost of just per hour. </p>
            <br />
            <Link href="/about" className="read-more">
              Read More
            </Link>
          </motion.div>

          <motion.div
            className="card"
            ref={ref}
            initial="hidden"
            variants={card2Variants}
            animate={inView ? "visible" : "hidden"}
          >
            <span className="card-number">.02</span>
            <h3>National Touch</h3>
            <p>Fluent English communication, just like a local 🙂</p>
            <br />
            <Link href="/about" className="read-more">
              Read More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TaxiBookingDispatcher;
