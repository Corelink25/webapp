import "../styles/Contact.css";
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("https://formsubmit.co/ajax/cornerstone.vision.services@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Your message has been sent successfully!");
        form.reset();
        setFormData({
          name: "",
          email: "",
          industry: "",
          company: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    });
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Partner With Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Industry" className="form-label">
            Industry
          </label>
          <select class="form-select" aria-label="Multiple select example">
          <option value="" disabled selected>Select an option</option>
            <option value="1">Health</option>
            <option value="2">Households</option>
            <option value="3">Cosmetics</option>
            <option value="4">Fashion</option>
            <option value="34">Technology</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Company" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
