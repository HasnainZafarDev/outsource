import "./serviceModal.css";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceModal = ({ isOpen, onClose, service }) => {
  
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("0");
  const [days, setDays] = useState("0");
  const [agreed, setAgreed] = useState(false);
  const hourlyRate = service?.hourlyRate || 100;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const calculatePrice = () => {
    const totalHours = parseInt(hours) + parseInt(days) * 24;
    return totalHours * hourlyRate;
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  const renderHourOptions = () => {
    const options = [];
    for (let i = 0; i < 25; i++) {
      options.push(
        <option key={i} value={i}>
          {/* {i} hours */}
          {i}
        </option>
      );
    }
    return options;
  };

  const renderDayOptions = () => {
    const options = [];
    for (let i = 0; i <= 30; i++) {
      options.push(
        <option key={i} value={i}>
          {/* {i} days */}
          {i} 
        </option>
      );
    }
    return options;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2 className="modal-title">{service.title}</h2>
              <button className="close-button" onClick={onClose}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <textarea
                className="modal-textarea"
                placeholder="Describe the Services you need"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="modal-select">Number Of Hour
              <select
                className="modal-select"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              >
                {renderHourOptions()}
              </select>
              </label>
              
              <label htmlFor="modal-select">Number Of Days
              <select
                className="modal-select"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              >
                {renderDayOptions()}
              </select>
              </label>

              <div className="modal-price-card">
                <div className="modal-price-details">
                  <h3 className="modal-price-title">Pricing Details</h3>
                  <p className="modal-price-item">
                    <span>Hourly Rate:</span> <strong>${hourlyRate}</strong>
                  </p>
                  <p className="modal-price-item">
                    <span>Hours:</span> <strong>{hours || 0}</strong>
                  </p>
                  <p className="modal-price-item">
                    <span>Days:</span> <strong>{days || 0}</strong>
                  </p>
                  <hr />
                  <p className="modal-price-total">
                    <span>Total Price:</span>{" "}
                    <strong>${calculatePrice() || 0}</strong>
                  </p>
                </div>
              </div>

              <div className="modal-checkbox-group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="modal-checkbox"
                />
                <label>I agree to the terms and conditions</label>
              </div>
            </div>

            <div className="modal-actions">
              <button className="modal-button cancel" onClick={onClose}>
                Cancel
              </button>
              <button
                className="modal-button proceed"
                disabled={!agreed || !description || !hours || !days}
              >
                Proceed to Payment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
