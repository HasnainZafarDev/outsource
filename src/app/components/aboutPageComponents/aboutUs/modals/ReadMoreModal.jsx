"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./readMoreModal.css";
import Image from "next/image";

const Modal = ({ isOpen, onClose, cardData }) => {
  const router = useRouter();

  if (!isOpen || !cardData) return null;

  const { icon, content } = cardData;

  const handleBuyServices = () => {
    router.push("/buyservices");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose}>
          &times;
        </button>
        <Image
          src={icon}
          alt="Card Icon"
          width={100}
          height={100}
          className="modal-icon"
        />
        <div className="modal-body">
          <p className="modal-text">{content}</p>
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
          <button className="modal-close-btn" onClick={onClose}>
            CLOSE
          </button>
          <button className="modal-action-btn" onClick={handleBuyServices}>
            BUY OUR SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
