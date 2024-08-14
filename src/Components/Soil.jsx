// src/SoilDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Soil.css';

const Soil = () => {
  const [soilData, setSoilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/soils');
        setSoilData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSoilData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="soil-container">
      <h2>Soil Types and Suitable Plants</h2>
      <div className="soil-list">
        {soilData.map((soil) => (
          <div key={soil.id} className="soil-item">
            <h3>{soil.type}</h3>
            <p>{soil.description}</p>
            <h4>Suitable Plants:</h4>
            <ul>
              {soil.suitablePlants.split(',').map((plant, i) => (
                <li key={i}>{plant.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soil;
