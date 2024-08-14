import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At <span className="brand-name">AgroMinds</span>, our mission is to empower budding farmers with the knowledge and resources needed to succeed in the evolving world of agriculture. We are dedicated to providing practical, detailed information and tools that support every stage of farming.
          </p>
          <p>
            Our platform is designed to be a comprehensive resource for new farmers, offering:
          </p>
          <ul>
            <li><strong>In-Depth Crop Information:</strong> Detailed insights into various crops including growth stages, soil requirements, seasonal practices, and pest management.</li>
            <li><strong>Expert Guidance on Inputs:</strong> Expert advice on the use of fertilizers and pesticides to maximize yield while ensuring environmental sustainability.</li>
            <li><strong>Access to Agricultural Experts:</strong> Direct connectivity with a network of experts including agronomists, soil scientists, and crop consultants for personalized support.</li>
            <li><strong>Technological Integration:</strong> Utilizing the latest technology to offer actionable insights and innovative solutions tailored to modern farming challenges.</li>
          </ul>
          <p>
            Our goal is to create a thriving agricultural community where every farmer has access to the resources and expertise needed to thrive. By combining technology with expert knowledge, we aim to foster sustainable practices and improve farming outcomes worldwide.
          </p>

        </div>
        <div className="mission-image-large">
          <img src="https://images.pexels.com/photos/5980/food-sunset-love-field.jpg?cs=srgb&dl=agriculture-field-grain-5980.jpg&fm=jpg" alt="Agriculture" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
