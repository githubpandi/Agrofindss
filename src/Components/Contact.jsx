import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaInfoCircle, FaCommentDots, FaImage, FaSeedling } from 'react-icons/fa';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    address: '',
    company: '',
    inquiryType: '',
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form data
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      address: '',
      company: '',
      inquiryType: '',
      image: null,
    });

    // Simulate a delay for showing the submission message
    setTimeout(() => {
      setSubmitted(false);
      window.location.reload(); // Refresh the page after showing the submission message
    }, 3000);

    // Add your form submission logic here (e.g., send data to backend)
  };

  return (
    <div className="contact-page1">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><FaUser /> Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone"><FaPhone /> Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company"><FaSeedling /> Farm Name:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address"><FaMapMarkerAlt /> Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquiryType"><FaInfoCircle /> Inquiry Type:</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message"><FaCommentDots /> Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image"><FaImage /> Upload Picture:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button1">Submit</button>
      </form>

      {submitted && <div className="submission-popup">Your response has been submitted!</div>}
    </div>
  );
};

export default ContactPage;
