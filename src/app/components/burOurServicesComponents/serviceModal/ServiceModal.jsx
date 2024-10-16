import "./serviceModal.css";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceModal = ({ isOpen, onClose, service }) => {
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("0");
  const [days, setDays] = useState("0");
  const [agreed, setAgreed] = useState(false);
  const [selectedHourlyRate, setSelectedHourlyRate] = useState("1.5");
  const [currency, setCurrency] = useState("USD");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const exchangeRate = 280; // Dollar Rate

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
    const priceInUSD = totalHours * parseFloat(selectedHourlyRate);
    return currency === "PKR" ? priceInUSD * exchangeRate : priceInUSD;
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  const hourOptions = () => {
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

  const dayOptions = () => {
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

  const hourlyRateOptions = () => {
    const options = [];
    for (let i = 1.5; i <= 10.5; i += 1.0) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };
  const currencyOptions = () => {
    return (
      <>
        <option value="USD">USD</option>
        <option value="PKR">PKR</option>
      </>
    );
  };

  const openPaymentModal = () => {
    setIsPaymentOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentOpen(false);
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

              <label htmlFor="modal-select">
                Number Of Hour
                <select
                  className="modal-select"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                >
                  {hourOptions()}
                </select>
              </label>

              <label htmlFor="modal-select">
                Number Of Days
                <select
                  className="modal-select"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                >
                  {dayOptions()}
                </select>
              </label>

              <label htmlFor="hourly-rate-select">
                Hourly Rate
                <select
                  className="modal-select"
                  value={selectedHourlyRate}
                  onChange={(e) => setSelectedHourlyRate(e.target.value)}
                >
                  {hourlyRateOptions()}
                </select>
              </label>

              <label htmlFor="currency-select">Currency</label>
              <select
                className="modal-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencyOptions()}
              </select>

              <div className="modal-price-card">
                <div className="modal-price-details">
                  <h3 className="modal-price-title">Pricing Details</h3>
                  <p className="modal-price-item">
                    <span>Hourly Rate:</span>{" "}
                    <strong>
                      {currency === "PKR"
                        ? `${(
                            parseFloat(selectedHourlyRate) * exchangeRate
                          ).toFixed(2)}RS`
                        : `$${selectedHourlyRate}`}
                    </strong>
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
                    <strong>
                      {currency === "PKR"
                        ? `${calculatePrice().toFixed(2)} RS`
                        : `$${calculatePrice().toFixed(2)}`}
                    </strong>
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
                // disabled={!agreed || !description || !hours || !days}
                onClick={openPaymentModal}
              >
                Proceed to Payment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Payment Modal */}
      {isPaymentOpen && (
        <motion.div
          className="modal-overlay"
          onClick={closePaymentModal}
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
              <h2 className="modal-title">Choose Payment Method</h2>
              <button className="close-button" onClick={closePaymentModal}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <button
                className="paypal-button"
                onClick={() => window.open("https://www.paypal.com", "_blank")}
              >
                Pay with PayPal
              </button>

              <button
                className="alfalah-button"
                onClick={() =>
                  window.open("https://www.bankalfalah.com", "_blank")
                }
              >
                Pay with Alfalah
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
