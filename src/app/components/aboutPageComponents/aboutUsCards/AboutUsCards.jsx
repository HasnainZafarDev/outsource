"use client";
import React from "react";
import "./aboutUsCards.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsCards = () => {
  const createCardVariants = (delay) => ({
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
  const cards = [
    {
      id: 1,
      title: "Customer Service",
      description:
        "At Lets Outsource, we believe that exceptional customer service is the cornerstone of our success. Our dedicated customer service team is here to provide you with seamless support and assistance, ensuring that all your inquiries and concerns are addressed promptly and effectively. We are committed to delivering a customer experience that is both satisfying and efficient, making your interaction with us as smooth as possible.",
      image: "/icon4.png",
    },
    {
      id: 2,
      title: "Agents DIP Center",
      description:
        "Our Agents DIP Center is a hub of expertise, where our highly trained professionals are ready to handle all aspects of your outsourcing needs. From processing to management, our agents are equipped with the latest tools and techniques to ensure optimal performance and delivery. Whether you’re looking for specialized services or general support, our DIP Center is the go-to resource for all your outsourcing requirements.",
      image: "/agents-dip.png",
    },
    {
      id: 3,
      title: "Sales Services",
      description:
        "Boost your business growth with our comprehensive sales services. At Lets Outsource, we provide tailored sales strategies that align with your business objectives. Our team of experienced sales professionals works closely with you to understand your target market and deliver results-driven solutions. From lead generation to closing deals, we are helping you to achieve your sales goals efficiently and effectively.",
      image: "/sale-service.png",
    },
    {
      id: 4,
      title: "Common Questions",
      description:
        "We understand that you may have questions about our services and how we operate. Our Common Questions section is designed to provide you with quick and clear answers to the most frequently asked questions. Whether you're curious about our processes, pricing, or service offerings, you'll find all the information you need right here. If you don’t see your question answered, our customer service team is always ready to assist.",
      image: "/faq.png",
    },
  ];

  return (
    <div className="about-us-cards-container">
      {cards.map((card, index) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        const variants = createCardVariants(index * 0.3);

        return (
          <motion.div
            key={card.id}
            className="about-us-card"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <Image
              src={card.image}
              alt={card.title}
              className="card-image"
              width={80}
              height={80}
            />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-para">{card.description}</p>
            <button className="card-btn">READ MORE</button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutUsCards;
