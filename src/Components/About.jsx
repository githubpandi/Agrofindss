import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h2>About Our Agricultural Management System</h2>
          <p>Empowering farmers and agribusinesses with innovative tools and solutions for sustainable agriculture.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Data-Driven Insights</h3>
            <p>Analyze and visualize your farm data to make informed decisions and optimize crop yields.</p>
          </div>
          <div className="feature-card">
            <h3>Smart Irrigation</h3>
            <p>Implement precision irrigation techniques to conserve water and ensure healthy crop growth.</p>
          </div>
          <div className="feature-card">
            <h3>Resource Management</h3>
            <p>Track and manage your resources effectively, including equipment, labor, and finances.</p>
          </div>
          <div className="feature-card">
            <h3>Crop Monitoring</h3>
            <p>Utilize remote sensing technology to monitor crop health and detect issues early.</p>
          </div>
          <div className="feature-card">
            <h3>Supply Chain Integration</h3>
            <p>Connect with suppliers, distributors, and markets to streamline your supply chain operations.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Alerts</h3>
            <p>Receive notifications and alerts for critical events such as weather changes and pest outbreaks.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=800" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>

          <div className="team-member">
            <img src="https://www.shutterstock.com/image-photo/portrait-one-young-happy-cheerful-600nw-1980856400.jpg" alt="Team Member" />
            <h3>Michael Brown</h3>
            <p>Head of Agronomy</p>
          </div>


          <div className="team-member">
            <img src="https://i.pinimg.com/736x/78/a2/b2/78a2b216dc8e4979009e8766cb6e77bd.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          
          <div className="team-member">
            <img src="https://www.materialculture.nl/sites/default/files/styles/hero_mobile/public/photo%20for%20website.jpg?h=c6d1cd02&itok=gNnwaqIU" alt="Team Member" />
            <h3>Sarah Johnson</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Us on Our Journey</h2>
        <p>
          Discover how our Agricultural Management System can transform your farming operations and lead you towards a sustainable future.
        </p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default About;
