import React, { useState } from 'react';
import './ComplaintForm.css'; // Import a CSS file for styling if needed

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    complaintId: '',
    crop: '',
    timeOfGrowth: '',
    affectedBy: '',
    severity: 'low',
    additionalComments: '',
    cropImage: null,
    dateOfComplaint: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      cropImage: event.target.files[0]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
    alert('Complaint submitted successfully!');
    // Reset form or redirect to another page
  };

  return (
    <div className="complaint-form-container">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="complaintId">Complaint ID:</label>
          <input
            type="text"
            id="complaintId"
            name="complaintId"
            value={formData.complaintId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="crop">Crop:</label>
          <input
            type="text"
            id="crop"
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="timeOfGrowth">Time of Growth:</label>
          <input
            type="text"
            id="timeOfGrowth"
            name="timeOfGrowth"
            value={formData.timeOfGrowth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="affectedBy">How Gets Affected:</label>
          <textarea
            id="affectedBy"
            name="affectedBy"
            value={formData.affectedBy}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group1">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group1">
          <label htmlFor="additionalComments">Additional Comments:</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group1">
          <label htmlFor="dateOfComplaint">Date of Complaint:</label>
          <input
            type="date"
            id="dateOfComplaint"
            name="dateOfComplaint"
            value={formData.dateOfComplaint}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="cropImage">Upload Crop Image:</label>
          <input
            type="file"
            id="cropImage"
            name="cropImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
