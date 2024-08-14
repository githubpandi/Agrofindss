// src/AddSoilForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddSoil = ({ onSoilAdded }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [suitablePlants, setSuitablePlants] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/soil', {
        type,
        description,
        suitablePlants
      });
      onSoilAdded(response.data); // Notify parent component
      setType('');
      setDescription('');
      setSuitablePlants('');
    } catch (error) {
      console.error('Error adding soil data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Soil</button>
    </form>
  );
};

export default AddSoil;
