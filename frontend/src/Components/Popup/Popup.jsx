import React, { useState } from "react";
import closeimg from "../Assets/close.png";
import "./Popup.css";
const Popup = (props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine: "",
    phonenumber: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTrigger(false);
    // Perform actions with the formData, such as sending it to a server
    props.onSubmit(formData);
  };
  return (
    props.trigger && (
      <div className="popup">
        <div className="popup-inner">
          <form onSubmit={handleSubmit}>
            <div
              onClick={() => {
                props.setTrigger(false);
              }}
              className="close-btn"
            >
              <img style={{ width: "20px" }} src={closeimg} alt="not-found" />
            </div>
            <label className="label1">
              Full Name:
              <input
                className="input1"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="label1">
              Address Line 1:
              <br />
              <textarea
                style={{ width: "100%", height: "80px" }}
                type="text"
                name="addressLine"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="label1">
              Phonenumber:
              <input
                className="input1"
                type="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
              />
            </label>
            <label className="label1">
              City:
              <input
                className="input1"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="label1">
              State:
              <input
                className="input1"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="label1">
              Zip Code:
              <input
                className="input1"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </label>
            <button className="button2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Popup;
