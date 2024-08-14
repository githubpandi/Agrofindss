// src/EditSoilForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditSoil = ({ soilToEdit, onUpdate, onClose }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [suitablePlants, setSuitablePlants] = useState('');

  useEffect(() => {
    if (soilToEdit) {
      setType(soilToEdit.type);
      setDescription(soilToEdit.description);
      setSuitablePlants(soilToEdit.suitablePlants);
    }
  }, [soilToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/api/soil/${soilToEdit.id}`, {
        type,
        description,
        suitablePlants
      });
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.error('Error updating soil data:', error);
    }
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <h3>Edit Soil Details</h3>
        <div>
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Suitable Plants (comma-separated):</label>
          <input
            type="text"
            value={suitablePlants}
            onChange={(e) => setSuitablePlants(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditSoil;
