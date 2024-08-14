import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fertilizer.css';

const fertilizers = [
  {
    type: 'Nitrogen Fertilizers',
    description: 'Essential for leaf growth and chlorophyll production. Examples include urea and ammonium nitrate.',
    details: 'Nitrogen fertilizers are crucial for promoting vigorous plant growth and ensuring high-quality crop production. They help in the synthesis of proteins, which are essential for plant development.',
    image: 'https://cdn.shopclues.com/images1/detailed/104451/148792220-104451383-1578568495.jpg' // Replace with actual image URL
  },
  {
    type: 'Phosphorus Fertilizers',
    description: 'Boost root development and flowering. Examples are superphosphate and ammonium phosphate.',
    details: 'Phosphorus fertilizers enhance root development, flowering, and seed formation. They are essential for energy transfer within the plant and contribute to overall plant health.',
    image: 'https://images.wisegeek.com/handful-of-fertilizer.jpg' // Replace with actual image URL
  },
  {
    type: 'Potassium Fertilizers',
    description: 'Enhances drought resistance and overall plant health. Potassium sulfate and muriate of potash are common forms.',
    details: 'Potassium fertilizers improve drought resistance, enhance plant vigor, and increase disease resistance. They are vital for the synthesis of proteins and enzymes in plants.',
    image: 'https://secureservercdn.net/198.71.233.129/96q.aa3.myftpupload.com/wp-content/uploads/2020/12/Sulfate-of-potash-fertilizer-1024x683.jpg' // Replace with actual image URL
  },
  {
    type: 'Organic Fertilizers',
    description: 'Derived from natural sources like compost and manure. They improve soil structure and biodiversity.',
    details: 'Organic fertilizers provide essential nutrients and improve soil structure and fertility. They enhance microbial activity and contribute to sustainable farming practices.',
    image: 'https://www.theprairiehomestead.com/wp-content/uploads/2021/07/Compost.jpg' // Replace with actual image URL
  }
];

const Fertilizer = () => {
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);

  const handleTypeClick = (fertilizer) => {
    setSelectedFertilizer(fertilizer);
  };

  const closeModal = () => {
    setSelectedFertilizer(null);
  };

  return (
    <div className="fertilizer-component">
      <div className="fertilizer-page">
        {/* Hero Section */}
        <section className="hero1">
          <div className="hero-content1">
            <h2>Optimize Your Crops with the Right Fertilizers</h2>
            <p>Unlock the potential of your soil and boost crop yields sustainably.</p>
          </div>
        </section>

        {/* Types of Fertilizers Section */}
        <section className="types">
          <h2>Types of Fertilizers</h2>
          <div className="types-grid">
            {fertilizers.map((fertilizer, index) => (
              <div
                className="type-card"
                key={index}
                onClick={() => handleTypeClick(fertilizer)}
              >
                <h3>{fertilizer.type}</h3>
                <p>{fertilizer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Benefits of Using Fertilizers</h2>
          <ul>
            <li>Increases crop yield and quality.</li>
            <li>Promotes healthy and robust plant growth.</li>
            <li>Enhances soil fertility and nutrient levels.</li>
            <li>Supports sustainable farming practices.</li>
          </ul>
          <img src="" alt="Fertilizer Benefits" className="benefits-image" />
        </section>

        {/* Fertilizer Tips Section */}
        <section className="tips">
          <h2>Fertilizer Usage Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Soil Testing</h3>
              <p>Conduct soil tests to determine nutrient requirements before applying fertilizers.</p>
            </div>
            <div className="tip-card">
              <h3>Correct Dosage</h3>
              <p>Follow recommended dosage instructions to prevent nutrient burn and waste.</p>
            </div>
            <div className="tip-card">
              <h3>Application Timing</h3>
              <p>Apply fertilizers at the right growth stage for maximum absorption and efficiency.</p>
            </div>
            <div className="tip-card">
              <h3>Balanced Nutrients</h3>
              <p>Use a balanced mix of nutrients tailored to the specific crop's needs.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action">
          <h2>Get Expert Fertilizer Advice</h2>
          <p>Contact us for personalized fertilizer recommendations and sustainable farming practices.</p>
          <Link to="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </section>

        {/* Fertilizer Details Modal */}
        {selectedFertilizer && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>{selectedFertilizer.type}</h2>
              <p>{selectedFertilizer.details}</p>
              <img src={selectedFertilizer.image} alt={selectedFertilizer.type} className="modal-image" />
              <button className="modal-close" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fertilizer;
