"use client";
import React, { useState, useEffect } from "react";
import "./humanizedServices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "../aboutPageComponents/aboutUs/modals/ReadMoreModal";

const HumanizedServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const services = [
    {
      id: 1,
      title: "Recurring Charges",
      description:
        "Manage recurring charges effortlessly with automated systems, ensuring seamless payments and reducing manual intervention significantly.",
      readMoreDescription:
        "With Lets Outsource's recurring charges management, you can automate payments and reduce manual intervention, ensuring smooth transactions every time. Our system handles everything from billing cycles to payment collection, keeping your operations running smoothly. By automating recurring charges, you can minimize human error, improve accuracy, and free up time to focus on other critical aspects of your business. We ensure payments are processed on time, while also giving you detailed reports and insights to track your financial performance. Whether you're managing subscriptions or other recurring payments, our solution adapts to your needs, making the entire process hassle-free and reliable. Let us help you take the complexity out of recurring charges."
    },
    {
      id: 2,
      title: "Email & SMS Channels",
      description:
        "Reach your audience effectively through integrated email and SMS channels, delivering timely updates and personalized messages.",
      readMoreDescription:
        "Leverage the power of integrated Email and SMS channels with Lets Outsource. Deliver timely updates, personalized messages, and reach your audience where they are most active. Whether you're sending marketing campaigns, reminders, or transactional messages, we ensure seamless communication that resonates with your customers. Our system allows you to manage both email and SMS from a single platform, simplifying your outreach process. Personalize each message to create a deeper connection with your audience and boost engagement rates. With detailed analytics and reporting, you can track the success of your campaigns and optimize them for better results. Our service ensures that your communication is always effective, timely, and engaging."
    },
    {
      id: 3,
      title: "Service Channels",
      description:
        "Streamline customer interactions by offering multiple service channels, ensuring accessibility and fast support across platforms.",
      readMoreDescription:
        "Lets Outsource's Service Channels offer seamless communication across multiple platforms, ensuring accessibility and fast response times. Whether it’s via live chat, email, or phone support, our service channels are designed to provide quick and efficient solutions to your customers. By offering multiple channels, you cater to diverse customer preferences, improving satisfaction and retention. Our integrated platform makes it easy to manage all interactions in one place, reducing wait times and ensuring no query goes unresolved. Plus, with advanced tracking and reporting tools, you can monitor response times, track customer satisfaction, and continuously improve your service. Let us help you provide an exceptional customer experience across all platforms."
    }
  ];
  
  const handleReadMore = (card) => {
    setSelectedCard({
      title: card.title,
      content: card.readMoreDescription,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);


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
              <button className="card-button" onClick={() => handleReadMore(service)}>READ MORE</button>
            </motion.div>
          );
        })}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cardData={selectedCard}
      />
    </div>
  );
};

export default HumanizedServices;
