import React from 'react';
import SideNavbar from './SideNavbar';
import { useAuth } from '../AuthContext'; 
import './Home1.css';

const Home1 = () => {
  const { user } = useAuth();

  return (
    <div className="home1-container">
      <SideNavbar adminName={user?.name || 'Admin'} />
      <div className="content">
        <h1>Welcome, Admin!</h1>
        <p>This is your dashboard where you can manage users, products, orders, and more.</p>
        {/* Additional content for the admin dashboard */}
      </div>
    </div>
  );
};

export default Home1;
