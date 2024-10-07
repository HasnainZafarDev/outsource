"use client";
import React from "react";
import "./contactBottom.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomShapeIcon from "@/utils/CustomShapeIcon";
import { useRouter } from "next/navigation";

const ContactBottom = () => {
  const router = useRouter();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const contactCardVariants = {
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
  const handleNavigation = ()=>{
    router.push("contact/onboardingform")
  }
  return (
    <div className="contact-bottom-section">
      <CustomShapeIcon className="svg-image" />
      <motion.div
        className="card"
        ref={ref}
        initial="hidden"
        variants={contactCardVariants}
        animate={inView ? "visible" : "hidden"}
      >
        <h1>
          {/* Improvise Communication With Your Customers In A Professional Way​ */}
          Taxi Booking and Dispatch Services Onboarding Questionnaire
        </h1>
        <p>
          {/* We are the best in market, known for our professionalism, highest
          paying employer, trusted and reliable outsourcing partner for your
          business. */}
          We are excited to embark on this journey together.To ensure a smooth
          onboarding process,Kindly fill out the Onboarding Questionnare
        </p>
        <button className="contact-btn" onClick={handleNavigation}>Onboarding Questionnare</button>
      </motion.div>
    </div>
  );
};

export default ContactBottom;
