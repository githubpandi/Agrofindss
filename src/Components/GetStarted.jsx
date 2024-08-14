import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="get-started-page">
      <header className="get-started-header">
        <h1>Get Started with AgriMinds</h1>
        <p>Your path to efficient and sustainable farming begins here!</p>
      </header>

      {/* Introduction Section */}
      <section className="get-started-introduction">
        <h2>Introduction</h2>
        <p>
        Welcome to AgroMinds, your partner in modern agriculture. We offer a comprehensive suite of tools and resources designed to boost
         productivity and sustainability in farming. From precision agriculture and smart irrigation to pest management and supply chain optimization, 
         our solutions help you make informed decisions. With advanced weather forecasting and soil health monitoring, you can plan
         effectively and enhance your operations. Committed to innovation and sustainability, AgriMinds empowers you to achieve higher yields 
         while promoting eco-friendly practices. Join us in transforming agriculture for a better future.
        </p>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="get-started-guides">
        <h2>How to Get Started</h2>
        <ol className="guides-list">
          <li>
            <h3>Create Your Account</h3>
            <p>
              Start by signing up for an account to access personalized features and insights.
            </p>
          </li>
          <li>
            <h3>Set Up Your Profile</h3>
            <p>
              Customize your profile with your farming preferences and goals to get tailored recommendations.
            </p>
          </li>
          <li>
            <h3>Explore Features</h3>
            <p>
              Discover the range of features available, from crop management to market insights, and start utilizing them for your benefit.
            </p>
          </li>
          <li>
            <h3>Connect with Experts</h3>
            <p>
              Join our community of experts and fellow farmers to share knowledge and gain valuable insights.
            </p>
          </li>
        </ol>
      </section>

      {/* Resources Section */}
      <section className="get-started-resources">
        <h2>Resources</h2>
        <div className="resources-container">
          <div className="resource-item">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ios-app-maker-for-video-and-movies-with-background-icon-and-image_2910655.jpg" alt="Resource 1" />
            <h3>Video Tutorials</h3>
            <p>Watch comprehensive video tutorials to learn about AgriManage's features.</p>
          </div>
          <div className="resource-item">
            <img src="https://t3.ftcdn.net/jpg/06/08/83/64/360_F_608836456_mHSejPSpYbKVdlNJR6JZebSygodG7awY.jpg" alt="Resource 2" />
            <h3>Knowledge Base</h3>
            <p>Access articles and guides that cover every aspect of agricultural management.</p>
          </div>
          <div className="resource-item">
            <img src="https://img.freepik.com/free-photo/business-brain-storming_53876-95301.jpg" alt="Resource 3" />
            <h3>Community Forums</h3>
            <p>Join discussions with other farmers and experts to exchange ideas and solutions.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="get-started-action">
        <h2>Ready to Take the Next Step?</h2>
        <p>Sign up for AgroMinds today and start revolutionizing your agricultural operations.</p>
        <Link to="/register">
          <button className="cta-button">Sign Up Now</button>
        </Link>
      </section>
    </div>
  );
};

export default GetStarted;
