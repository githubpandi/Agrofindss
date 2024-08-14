import React, { useState, useEffect } from 'react';
import './Schemes.css';

const SchemesPage = () => {
  const [schemes, setSchemes] = useState([]);
  const [visibleSchemes, setVisibleSchemes] = useState(5);
  const [selectedScheme, setSelectedScheme] = useState(null);

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

  const loadMoreSchemes = () => {
    setVisibleSchemes((prev) => prev + 5);
  };

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleCloseModal = () => {
    setSelectedScheme(null);
  };

  return (
    <div className="schemes-page">
      <h1 className="page-title">Government Schemes</h1>
      <div className="schemes-list">
        {schemes.slice(0, visibleSchemes).map((scheme, index) => (
          <div className="scheme-card" key={index} onClick={() => handleSchemeClick(scheme)}>
            <h2 className="scheme-title">{scheme.title}</h2>
            <p className="scheme-description">{scheme.description}</p>
          </div>
        ))}
      </div>
      {visibleSchemes < schemes.length && (
        <button className="load-more-button" onClick={loadMoreSchemes}>
          Load More
        </button>
      )}

      {selectedScheme && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>Back</button>
            <h2>{selectedScheme.title}</h2>
            <p>{selectedScheme.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemesPage;
