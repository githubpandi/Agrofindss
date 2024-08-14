import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from '../AuthContext'; // Import the Auth context
import './Home.css';

const Home = () => {
  const { isLoggedIn, user } = useAuth(); // Use the Auth context

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {isLoggedIn ? (
            <>
              <h1>Welcome back, {user?.name}!</h1>
              <p>Continue managing your agricultural operations with AgroMinds.</p>
              <Link to="/dashboard">
                <button className="cta-button">Go to Dashboard</button>
              </Link>
            </>
          ) : (
            <>
              <h1>Welcome to AgriFinds</h1>
              <p>Innovative Agricultural Dependent Solution</p>
              <Link to="/get-started">
                <button className="cta-button">Join US</button>
              </Link>
            </>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About AgroFinds</h2>
          <p>
            AgroFinds is designed to revolutionize the way farmers, agronomists, and agricultural businesses operate. By providing a platform that integrates crop management, weather forecasting, and resource allocation, AgroMinds helps you make informed decisions to boost productivity and sustainability.
          </p>
        </div>
        <img src="https://wallpapercave.com/wp/wp9212461.jpg" alt="About Agriculture" className="about-image" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Crop Management</h3>
            <p>Monitor crop health, manage sowing schedules, and optimize yields with our advanced tools.</p>
          </div>
          <div className="feature-card">
            <h3>Weather Forecasting</h3>
            <p>Stay ahead of the weather with accurate forecasts and real-time alerts.</p>
          </div>
          <div className="feature-card">
            <h3>Resource Planning</h3>
            <p>Efficiently manage resources like water, fertilizer, and manpower.</p>
          </div>
          <div className="feature-card">
            <h3>Market Insights</h3>
            <p>Gain valuable insights into market trends and pricing to maximize your profits.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"AgroFinds has transformed my farming business. The insights and management tools have boosted my productivity significantly!"</p>
            <h4>- John Doe, Farmer</h4>
          </div>
          <div className="testimonial-card">
            <p>"With AgroFinds, I can make data-driven decisions that improve efficiency and profitability. It's a game-changer for agronomists!"</p>
            <h4>- Jane Smith, Agronomist</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {!isLoggedIn && (
        <section className="call-to-action">
          <h2>Ready to Transform Your Agricultural Operations?</h2>
          <Link to="/register">
            <button className="cta-button">Join Us Now</button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Home;
