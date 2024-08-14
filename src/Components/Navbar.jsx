import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { useAuth } from '../AuthContext'; // Import the Auth context
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../Assets/logo1.png'; // Import the logo image
import axios from 'axios'; // Import axios for API calls

const Navbar = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, user, logout } = useAuth(); // Use the Auth context
  const navigate = useNavigate(); // For programmatic navigation

  const handleMoreDropdownToggle = () => {
    setIsMoreDropdownOpen((prevState) => !prevState);
  };

  const handleUserProfileClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/id/${user.id}`);
      setUserDetails(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the Auth context
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/soil"><i className="fas fa-leaf"></i> Soil</Link></li>
            <li><Link to="/crops"><i className="fas fa-seedling"></i> Crops</Link></li>
            <li><Link to="/agri"><i className="fas fa-user-tie"></i> Experts</Link></li>
            <li><Link to="/fertilizer"><i className="fas fa-flask"></i> Fertilizer</Link></li>
            <li><Link to="/complaint"><i className="fas fa-exclamation-triangle"></i> Complaint</Link></li>
            <li 
              className="dropdown" 
              onMouseEnter={handleMoreDropdownToggle}
              onMouseLeave={handleMoreDropdownToggle}
            >
              <span className="dropbtn"><i className="fas fa-ellipsis-h"></i> More</span>
              {isMoreDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/schemes"><i className="fas fa-hand-holding-usd"></i> Schemes</Link>
                  <Link to="/products"><i className="fas fa-box"></i> Products</Link>
                </div>
              )}
            </li>
            <li className="user-profile" onClick={handleUserProfileClick}>
              <i className="fas fa-user"></i> {user?.name || 'User'}
            </li>
          </>
        ) : (
          <>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
            <li><Link to="/mission"><i className="fas fa-bullseye"></i> Mission</Link></li>
            <li><Link to="/register"><i className="fas fa-user-plus"></i> SignUp</Link></li>
            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
          </>
        )}
      </ul>

      {showModal && userDetails && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>User Details</h2>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>City: {userDetails.city}</p>
            {/* Add other user details here */}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
