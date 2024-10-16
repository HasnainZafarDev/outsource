"use client";
import { React, useState, useEffect } from "react";
import "./aboutUs.css";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "./modals/ReadMoreModal";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Support 24/7",
      description:
        "At Lets Outsource, we understand the importance of timely support. Our team is available around the clock to provide the assistance you need, whenever you need it. Whether it's a technical issue or an operational challenge, we're here to help you every step of the way",
      image: "/time.png",
      readMoreDescription:
        "At Lets Outsource, we understand the critical importance of timely support in ensuring the smooth operation of your business. That’s why our dedicated support team is available 24/7, ready to assist you with any queries or issues that arise, no matter the time or day. Whether you’re dealing with an unexpected technical challenge or need advice on optimizing your workflow, you can count on our team to be there. Our priority is to minimize downtime and provide fast, effective solutions. We ensure that your business is always running at peak efficiency, offering peace of mind knowing that expert assistance is just a call or message away. At Lets Outsource, we don’t just provide support, we provide reliability, ensuring your success.",
    },
    {
      id: 2,
      title: "Robust Help",
      description:
        "Our commitment to excellence extends beyond just providing support. We offer robust, comprehensive help designed to address all challenges your business may face. From strategic planning to execution, our experts are ready to guide you towards success.",
      image: "/robust-help.png",
      readMoreDescription:
        "At Lets Outsource, we pride ourselves on delivering more than just basic support. We offer comprehensive, robust help tailored to meet the specific needs of your business. Our solutions go beyond quick fixes; we provide strategic insights, detailed guidance, and long-term support designed to address any challenges that may arise. Whether it’s troubleshooting a technical issue, optimizing your operational processes, or offering advice on improving business efficiency, our team is equipped with the knowledge and experience to help you succeed. With a deep understanding of your business landscape, we ensure that our help is proactive, anticipating potential issues before they impact your operations. At Lets Outsource, we are not just here to help — we are here to elevate your business, empowering you to achieve sustained growth and success.",
    },
    {
      id: 3,
      title: "Customer Service",
      description:
        "At Lets Outsource, we believe that exceptional customer service is the cornerstone of our success. Our dedicated customer service team is here to provide you with seamless support and assistance, ensuring that all your inquiries and concerns are addressed promptly and effectively. We are committed to delivering a customer experience that is both satisfying and efficient, making your interaction with us as smooth as possible.",
      image: "/icon4.png",
      readMoreDescription:
        "At Lets Outsource, our customer service philosophy is rooted in creating meaningful relationships with our clients. We don't just offer support—we actively engage with our clients to understand their unique challenges and needs. Our team of highly trained customer service representatives is available around the clock, ensuring prompt and professional responses to all inquiries. Whether you need help with a service, troubleshooting, or simply have a question about our processes, we’re here to assist with clear communication and a friendly approach. Our goal is to exceed expectations, fostering long-term partnerships based on trust and transparency.",
    },
    {
      id: 4,
      title: "Agents DIP Center",
      description:
        "Our Agents DIP Center is a hub of expertise, where our highly trained professionals are ready to handle all aspects of your outsourcing needs. From processing to management, our agents are equipped with the latest tools and techniques to ensure optimal performance and delivery. Whether you’re looking for specialized services or general support, our DIP Center is the go-to resource for all your outsourcing requirements.",
      image: "/agents-dip.png",
      readMoreDescription:
        "Our Agents DIP (Document Image Processing) Center is a state-of-the-art facility where we leverage the latest in digital technology to handle high-volume, complex data processing tasks. Our highly skilled agents are not only proficient in manual data entry but also experts in automating workflows to optimize speed and accuracy. By centralizing expertise in our DIP Center, we ensure consistent, high-quality outcomes for every project, whether it's document scanning, form processing, or large-scale data extraction. This center operates with industry-leading tools, following best practices to handle sensitive information securely and efficiently.",
    },
    {
      id: 5,
      title: "Sales Services",
      description:
        "Boost your business with our expert sales services at Lets Outsource. We offer customized sales strategies designed to meet your specific business goals. Our experienced sales professionals collaborate with you to identify your target market and implement solutions that drive results. From generating leads to closing deals, we ensure you achieve your sales objectives efficiently, helping your business thrive in a competitive market.",
      image: "/sale-service.png",
      readMoreDescription:
        "Lets Outsource provides a complete range of sales services designed to drive revenue and accelerate growth for your business. Our approach is not one-size-fits-all; we tailor each strategy to fit your specific market needs and business objectives. Our expert sales team conducts in-depth market analysis, identifying key opportunities and challenges that are unique to your industry. We offer services ranging from lead generation and sales funnel optimization to full-service management of your entire sales cycle. Whether you're looking to increase customer acquisition, boost retention rates, or penetrate new markets, our sales professionals work closely with your team to deliver measurable results and sustainable growth.",
    },
    {
      id: 6,
      title: "Common Questions",
      description:
        "We understand that you may have questions about our services and how we operate. Our Common Questions section is designed to provide you with quick and clear answers to the most frequently asked questions. Whether you're curious about our processes, pricing, or services,you'll find all the information you need right here. If you don’t see your question answered, our customer service team is always ready to assist.",
      image: "/faq.png",
      readMoreDescription:
        "At Lets Outsource, we prioritize transparency in all aspects of our services. Our Common Questions section is designed to provide you with quick and easy access to the most frequently asked queries about our offerings. Covering topics such as service scope, pricing models, turnaround times, and data security measures, this section is your go-to resource for understanding how we operate. If you have specific concerns about how outsourcing can benefit your business, or how we safeguard sensitive information, you’ll find comprehensive answers here. In case your question is not listed, our team is always on hand to provide personalized responses and further clarification.",
    },
  ];

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

  const handleReadMore = (card) => {
    setSelectedCard({
      icon: card.image,
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

  return (
    <div className="about-us-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="about-us-left">
          <h1 className="about-title">About Lets Outsource</h1>
          <p className="about-para">
            Welcome to Let's Outsource, your trusted partner in achieving
            operational excellence. As a premier outsourcing company, we are
            more than just a service provider – we are a dedicated team
            committed to empowering your business with tailored solutions that
            align with your goals. With a deep understanding of your unique
            challenges, we go beyond meeting expectations. We strive to exceed
            them, providing innovative strategies that address both your current
            and future needs.
            {/* </p> */}
            {/* <p className="about-para"> */}
            Customer satisfaction is not merely a metric for us; it's a core
            value that drives every aspect of our operations. Our team operates
            within a culture of continuous improvement, where every interaction
            is viewed as an opportunity to deliver exceptional value. Through
            rigorous training and ongoing monitoring, we ensure that every
            service we provide is of the highest quality, making your success
            our top priority.
          </p>
          <br />
          <p className="director">SAC Director</p>
          <p className="director-name">Victor Salummi</p>
        </div>

        <div className="about-us-right">
          {cards.slice(0, 2).map((card, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
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
                <button
                  className="card-btn"
                  onClick={() => handleReadMore(card)}
                >
                  READ MORE
                </button>
              </motion.div>
            );
          })}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            cardData={selectedCard}
          />
        </div>
      </div>
      {/* Bottom Section */}

      <div className="bottom-cards">
        {cards.slice(2, 6).map((card, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });
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
              <button className="card-btn" onClick={() => handleReadMore(card)}>
                READ MORE
              </button>
            </motion.div>
          );
        })}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          cardData={selectedCard}
        />
      </div>
    </div>
  );
};

export default AboutUs;
