"use client";
import React, { useState } from "react";
import {
  FaTaxi,
  FaBroadcastTower,
  FaHeadphones,
  FaMailBulk,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./buyOurServices.css";
import ServiceModal from "./serviceModal/ServiceModal";

const BuyOurServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Taxi Booking Services",
      description:
        "Streamline your transportation needs with our advanced booking and dispatching solutions.",
      icon: <FaTaxi />,
      hourlyRate: 70,
    },
    {
      id: 2,
      title: "Outsourcing Services",
      description:
        "Optimize your operations with our professional outsourcing services.",
      icon: <FaBroadcastTower />,
      hourlyRate: 100,
    },
    {
      id: 3,
      title: "Remote Staff Hiring",
      description:
        "Find the best remote talent to enhance your business efficiency.",
      icon: <HiUserGroup />,
      hourlyRate: 50,
    },
    {
      id: 4,
      title: "Customer Support",
      description:
        "Ensure exceptional customer experiences with our dedicated support team.",
      icon: <FaHeadphones />,
      hourlyRate: 40,
    },
    {
      id: 5,
      title: "Email Support Services",
      description:
        "Professional and timely email handling to keep your clients satisfied.",
      icon: <FaMailBulk />,
      hourlyRate: 20,
    },
    {
      id: 6,
      title: "Live Chat Support",
      description:
        "Real-time chat support to engage and assist your website visitors.",
      icon: <IoChatbubblesOutline />,
      hourlyRate: 69,
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <div className="buy-services-container">
      {services.map((service) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        return (
          <motion.div
            key={service.id}
            className="buy-service-card"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-circle">
              <span className="card-icon">{service.icon}</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <button
              className="buy-now-button"
              onClick={() => openModal(service)}
            >
              BUY NOW
            </button>
          </motion.div>
        );
      })}
      {modalOpen && selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default BuyOurServices;
