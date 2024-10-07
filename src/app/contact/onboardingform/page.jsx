"use client";
import React, { useState } from "react";
import "./onBoardingForm.css";
import Confirmation from "./Confirmation";

const OnboardingForm = () => {
  const vehicleOptions = [
    "Saloon Car",
    "SUVs",
    "Estate",
    "MPV",
    "Skoda Octavia",
    "MG 5",
    "Toyota Corolla",
    "Kia Niro EV",
    "Volkswagen Touran",
    "Ford Grand",
    "Mercedes",
    "Volkswagen Multivan",
    "6 Seater",
    "8 Seater",
    "WheelChair Affordable",
  ];
  const initialState = {
    companyName: "",
    businessAddress: "",
    contactPerson: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    currentDispatchSystem: "",
    companyId: "",
    loginLink: "",
    username: "",
    password: "",
    extensionNo: "",
    wallboardLink: "",
    wallboardUsername: "",
    wallboardPassword: "",
    phoneType: "",
    softphoneLink: "",
    softphoneUsername: "",
    softphonePassword: "",
    physicalPhonePref: "",
    operatingHours: "",
    peakHours: "",
    expectedCallVolumes: "",
    nightShiftRequirements: "",
    staffRequired: "",
    fleetSize: "",
    fleetTypes: [],
    vehicleCounts: {},
    vehiclePreferences: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const newFleetTypes = checked
        ? [...prevData.fleetTypes, value]
        : prevData.fleetTypes.filter((type) => type !== value);
      const newVehicleCounts = { ...prevData.vehicleCounts };
      if (checked) {
        // If checked, add the vehicle type with an initial count of 1
        newVehicleCounts[value] = 1;
      } else {
        // If unchecked, remove the vehicle type from vehicleCounts
        delete newVehicleCounts[value];
      }

      return {
        ...prevData,
        fleetTypes: newFleetTypes,
        vehicleCounts: newVehicleCounts,
      };
    });
  };

  const handleCountChange = (vehicleType, count) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicleCounts: {
        ...prevData.vehicleCounts,
        [vehicleType]: count,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
    setFeedbackMessage("");
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendOnboardingQuestionnaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setFeedbackMessage("Failed to send the message.");
        return;
      }

      const result = await response.json();
      setFeedbackMessage("Message sent successfully!");
      setFormData(initialState);
    } catch (error) {
      setFeedbackMessage("Failed to send the message.");
    } finally {
      setIsSubmitting(false);
      setIsConfirmed(false);
      setFormData(initialState);
    }
  };

  const handleEdit = () => {
    setIsConfirmed(false);
    setFeedbackMessage("");
  };

  return (
    <div className="email-support">
      <h1>Business Onboarding Questionnaire</h1>
      <p>
        Welcome to <span>LETS OUTSOURCE!</span> We are excited to embark on this
        journey together and appreciate the opportunity to streamline and
        enhance your taxi booking and dispatch operations. To ensure a smooth
        onboarding process, kindly provide us with the following information:
      </p>

      {isConfirmed ? (
        <Confirmation
          formData={formData}
          onConfirm={handleConfirm}
          onEdit={handleEdit}
        />
      ) : (
        <form onSubmit={handleSubmit} className="onboarding-form">
          <section>
            <h2>General Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="businessAddress">Business Address</label>
                <input
                  id="businessAddress"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPerson">Contact Person</label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactTitle">Contact Person's Title</label>
                <input
                  id="contactTitle"
                  name="contactTitle"
                  value={formData.contactTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Person's Email</label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPhone">Contact Person's Phone</label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Current Dispatch System Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="currentDispatchSystem">Current System</label>
                <input
                  id="currentDispatchSystem"
                  name="currentDispatchSystem"
                  value={formData.currentDispatchSystem}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyId">Company ID</label>
                <input
                  id="companyId"
                  name="companyId"
                  value={formData.companyId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginLink">Login Link</label>
                <input
                  id="loginLink"
                  name="loginLink"
                  type="url"
                  value={formData.loginLink}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username/Login ID</label>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="extensionNo">Extension No</label>
                <input
                  id="extensionNo"
                  name="extensionNo"
                  value={formData.extensionNo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="wallboardLink">Wallboard Link</label>
                <input
                  id="wallboardLink"
                  name="wallboardLink"
                  type="url"
                  value={formData.wallboardLink}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="wallboardUsername">Wallboard Username</label>
                <input
                  id="wallboardUsername"
                  name="wallboardUsername"
                  type="string"
                  value={formData.wallboardUsername}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="wallboarPassword">Wallboard Password</label>
                <input
                  id="wallboardPassword"
                  name="wallboardPassword"
                  type="password"
                  value={formData.wallboardPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Phone Integration and Configuration</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="phoneType">Type Of Telephone Lines</label>
                <input
                  placeholder="What type of Telephone Lines do you use?"
                  id="phoneType"
                  name="phoneType"
                  value={formData.phoneType}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="softphoneLink">
                  Softphone Integration Link
                </label>
                <input
                  id="softphoneLink"
                  name="softphoneLink"
                  type="url"
                  value={formData.softphoneLink}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="softphoneUsername">Softphone Username</label>
                <input
                  id="softphoneUsername"
                  name="softphoneUsername"
                  value={formData.softphoneUsername}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="softphonePassword">Softphone Password</label>
                <input
                  id="softphonePassword"
                  name="softphonePassword"
                  value={formData.softphonePassword}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="physicalPhonePref">
                  Physical Phone Preferences
                </label>
                <textarea
                  id="physicalPhonePref"
                  name="physicalPhonePref"
                  value={formData.physicalPhonePref}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Operational Preferences</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="operatingHours">
                  Operating Hours (Time Zone)
                </label>
                <textarea
                  id="operatingHours"
                  name="operatingHours"
                  value={formData.operatingHours}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="peakHours">Peak Hours</label>
                <input
                  id="peakHours"
                  name="peakHours"
                  value={formData.peakHours}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expectedCallVolumes">
                  Expected Call Volumes
                </label>
                <input
                  id="expectedCallVolumes"
                  name="expectedCallVolumes"
                  value={formData.expectedCallVolumes}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nightShiftRequirements">
                  Night Shift Requirements
                </label>
                <textarea
                  placeholder="Specific requirements for Night shifts (if applicable):"
                  id="nightShiftRequirements"
                  name="nightShiftRequirements"
                  value={formData.nightShiftRequirements}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="staffRequired">Number of Staff Required</label>
                <input
                  id="staffRequired"
                  name="staffRequired"
                  type="number"
                  value={formData.staffRequired}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Fleet Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fleetSize">Number of Vehicles</label>
                <input
                  id="fleetSize"
                  name="fleetSize"
                  type="number"
                  value={formData.fleetSize}
                  onChange={handleChange}
                />
              </div>
              <div className="type-of-vehicle">
                <label>Types of Vehicles</label>
                <div className="vehicle-types">
                  {vehicleOptions.map((vehicle) => (
                    <div key={vehicle} className="vehicle-checkbox">
                      <label htmlFor={vehicle}>{vehicle}</label>
                      <input
                        type="checkbox"
                        id={vehicle}
                        name="vehicleTypes"
                        value={vehicle}
                        checked={formData.fleetTypes.includes(vehicle)}
                        onChange={handleCheckboxChange}
                      />

                      {formData.fleetTypes.includes(vehicle) && (
                        <select
                          value={formData.vehicleCounts[vehicle] || ""}
                          onChange={(e) =>
                            handleCountChange(vehicle, e.target.value)
                          }
                        >
                          <option value="" disabled>
                            Select number (up to 500)
                          </option>
                          {[...Array(501)].map((_, index) => (
                            <option key={index} value={index}>
                              {index}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="vehiclePreferences">Vehicle Preferences</label>
                <textarea
                  placeholder="Any specific Vehicle-related requirements Or preferences..."
                  id="vehiclePreferences"
                  name="vehiclePreferences"
                  value={formData.vehiclePreferences}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
          {feedbackMessage && <p>{feedbackMessage}</p>}
        </form>
      )}

      <div className="form-footer">
        <p>
          We appreciate your time in providing us with these details, as they
          will be instrumental in tailoring our services to meet your unique
          needs. If you have any supporting documents or additional information
          you'd like to share, please feel free to attach them.
        </p>
        <p>
          Thank you for choosing LETS OUTSOURCE as your outsourcing partner. We
          look forward to delivering a seamless and efficient taxi booking and
          dispatch solution for your business.
        </p>
        <p>Best Regards,</p>
        <p>Management Team,</p>
        <span>Lets Outsource!</span>
        <p>
          Website:{" "}
          <a href="http://www.letsoutsource.co.uk">www.letsoutsource.co.uk</a>{" "}
          <br />{" "}
          <a href="http://www.letsoutsource.co.uk" className="website-tag">
            www.letsoutsource.co.uk
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:jsher@letsoutsource.co.uk">
            jsher@letsoutsource.co.uk
          </a>
          ,{" "}
          <a href="mailto:simon@letsoutsource.co.uk">
            simon@letsoutsource.co.uk
          </a>
          ,{" "}
          <a href="mailto:mgt.letsoutsource@gmail.com">
            mgt.letsoutsource@gmail.com
          </a>
        </p>
        <p>Phone: 01623 396 943</p>
      </div>
    </div>
  );
};

export default OnboardingForm;
