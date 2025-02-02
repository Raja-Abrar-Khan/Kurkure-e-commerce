import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.scss";
const UserDetails = () => {
  const {id}= useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    userId: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Ensure userId is a number
      const formDataWithNumber = {
        ...formData,
        userId: parseInt(formData.userId, 10),
      };

      const response = await fetch(`http://localhost:9001/user/post-details/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithNumber),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Details successfully submitted!");
        setFormData({
          fullName: "",
          phone: "",
          address: "",
          userId: "",
        });
      } else {
        setMessage(
          data.message || "An error occurred while submitting details."
        );
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="user-details-container">
      <form className="user-details-form" onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        {message && <p className="message">{message}</p>}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
