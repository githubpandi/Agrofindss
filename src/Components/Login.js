import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', // New state for the user role, default to 'user'
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      const userData = response.data;
      if (userData) {
        login(userData);
        if (userData.role === 'admin') {
          navigate('/home1');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      setErrorMessage('Invalid login credentials');
      console.error('There was an error logging in!', error);
    }
  };


  

  return (
    <div className="login-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="image-overlay">Agricultural Management System</div>
        </div>
        <div className="form-section">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="heading">Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Add Radio Buttons for User Role */}
            <div className="form-group role-group">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === 'user'}
                  onChange={handleChange}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleChange}
                />
                Admin
              </label>
            </div>

            <button type="submit" className="login-button">Login</button>
            <div className="already-account">
              <p>Don't have an account?</p>
              <a href="/register" className="register-link">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
