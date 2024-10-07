import "./confirmation.css";

const Confirmation = ({ formData, onConfirm, onEdit }) => {
  return (
    <div className="confirmation-component">
      <h2>Please Confirm Your Details</h2>
      <div className="confirmation-details">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="confirmation-item">
            <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
            {Array.isArray(value)
              ? value.join(", ") // Join array values with a comma
              : typeof value === "object" && value !== null
              ? // Handle object values (like vehicleCounts)
                Object.entries(value)
                  .map(([subKey, subValue]) => `${subKey}: ${subValue}`)
                  .join(", ")
              : value} {/* Handle simple values */}
          </div>
        ))}
      </div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onConfirm}>Confirm and Submit</button>
    </div>
  );
};

export default Confirmation;
