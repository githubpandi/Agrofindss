import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SoilInfo.css';
import AddSoil from './AddSoil';
import EditSoil from './EditSoil';
import SideNavbar from './SideNavbar';

const SoilInfo = () => {
  const [soilData, setSoilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingSoil, setEditingSoil] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false); // State to control the AddSoil form visibility

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

  const handleSoilAdded = (newSoil) => {
    setSoilData([...soilData, newSoil]);
    setShowAddForm(false); // Close the AddSoil form after adding
  };

  const handleEditClick = (soil) => {
    setEditingSoil(soil);
    setShowEditForm(true);
  };

  const handleUpdate = (updatedSoil) => {
    setSoilData(soilData.map((soil) => (soil.id === updatedSoil.id ? updatedSoil : soil)));
    setEditingSoil(null);
    setShowEditForm(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/soil/${id}`);
      setSoilData(soilData.filter((soil) => soil.id !== id));
    } catch (error) {
      console.error('Error deleting soil data:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
      <div className="soil-container">
        <SideNavbar/>
      <h2>Soil Types and Suitable Plants (Admin View)</h2>
      <button onClick={() => setShowAddForm(true)} className="add-soil-button">Add Soil</button> {/* Add Soil button */}
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
            <button onClick={() => handleEditClick(soil)}>Edit</button>
            <button onClick={() => handleDelete(soil.id)}>Delete</button>
          </div>
        ))}
      </div>
      {showAddForm && (
        <div className="modal">
          <AddSoil onSoilAdded={handleSoilAdded} />
          <button onClick={() => setShowAddForm(false)} className="close-modal">Close</button> {/* Close button for Add Soil form */}
        </div>
      )}
      {showEditForm && (
        <EditSoil
          soilToEdit={editingSoil}
          onUpdate={handleUpdate}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
};

export default SoilInfo;
