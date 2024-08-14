import React, { useState, useEffect } from 'react';
import './AdminSchemePage.css';
import SideNavbar from './SideNavbar';

const AdminSchemePage = () => {
  const [schemes, setSchemes] = useState([]);
  const [newScheme, setNewScheme] = useState({ title: '', description: '', details: '' });
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/schemes/all');
      const data = await response.json();
      setSchemes(data);
    } catch (error) {
      console.error('Error fetching schemes:', error);
    }
  };

  const addScheme = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/schemes/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newScheme),
      });
      const addedScheme = await response.json();
      setSchemes([...schemes, addedScheme]);
      setNewScheme({ title: '', description: '', details: '' });
    } catch (error) {
      console.error('Error adding scheme:', error);
    }
  };

  const updateScheme = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/schemes/update/${selectedScheme.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedScheme),
      });
      const updatedScheme = await response.json();
      setSchemes(schemes.map((scheme) => (scheme.id === updatedScheme.id ? updatedScheme : scheme)));
      setIsEditing(false);
      setSelectedScheme(null);
    } catch (error) {
      console.error('Error updating scheme:', error);
    }
  };

  const removeScheme = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/schemes/delete/${id}`, {
        method: 'DELETE',
      });
      setSchemes(schemes.filter((scheme) => scheme.id !== id));
    } catch (error) {
      console.error('Error deleting scheme:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewScheme({ ...newScheme, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedScheme({ ...selectedScheme, [name]: value });
  };

  const handleEditClick = (scheme) => {
    setSelectedScheme(scheme);
    setIsEditing(true);
  };

  return (
    <div className="admin-schemes-page">
        <SideNavbar/>
      <h1>Manage Government Schemes</h1>

      <div className="add-scheme-form">
        <h2>Add New Scheme</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newScheme.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newScheme.description}
          onChange={handleInputChange}
        />
        <textarea
          name="details"
          placeholder="Details"
          value={newScheme.details}
          onChange={handleInputChange}
        />
        <button onClick={addScheme}>Add Scheme</button>
      </div>

      <div className="schemes-list">
        <h2>Existing Schemes</h2>
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <h3>{scheme.title}</h3>
            <p>{scheme.description}</p>
            <button onClick={() => handleEditClick(scheme)}>Edit</button>
            <button onClick={() => removeScheme(scheme.id)}>Delete</button>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="edit-scheme-form">
          <h2>Edit Scheme</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={selectedScheme.title}
            onChange={handleEditInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={selectedScheme.description}
            onChange={handleEditInputChange}
          />
          <textarea
            name="details"
            placeholder="Details"
            value={selectedScheme.details}
            onChange={handleEditInputChange}
          />
          <button onClick={updateScheme}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AdminSchemePage;
