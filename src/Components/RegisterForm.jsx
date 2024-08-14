import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { FaUser, FaEnvelope, FaCity, FaLock, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
    role: 'user', // New state for the user role, default to 'user'
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect to login page after 2 seconds
    }
  }, [isRegistered, navigate]);

  const validate = () => {
    let errors = {};

    // Name validation (only alphabets)
    if (!/^[a-zA-Z]+$/.test(formData.name)) {
      errors.name = "Name can only contain alphabets.";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address.";
    }

    // City validation (only alphabets)
    if (!/^[a-zA-Z]+$/.test(formData.city)) {
      errors.city = "City can only contain alphabets.";
    }

    // Password validation (alphabets, numbers, symbols)
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(formData.password)) {
      errors.password = "Password must contain at least 8 characters, including letters, numbers, and symbols.";
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/api/register', formData);
        console.log('Form submitted:', response.data);
        setIsRegistered(true);
      } catch (error) {
        console.error('There was an error registering the user!', error);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="image-overlay">Agricultural Management System</div>
        </div>
        <div className="form-section1">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            {isRegistered && <p className="success-message">Registered successfully! Redirecting to login...</p>}
            <div className="form-group2">
              <FaUser className="icon" />
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group2">
              <FaEnvelope className="icon" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group2">
              <FaCity className="icon" />
              <input 
                type="text" 
                id="city" 
                name="city" 
                placeholder="City" 
                value={formData.city}
                onChange={handleChange}
                required 
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>
            <div className="form-group2">
              <FaLock className="icon" />
              <input 
                type={passwordVisible ? "text" : "password"} 
                id="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <span 
                className="eye-icon" 
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="form-group2">
              <FaKey className="icon" />
              <input 
                type={confirmPasswordVisible ? "text" : "password"} 
                id="confirm-password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
              <span 
                className="eye-icon" 
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
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

            <button type="submit" className="register-button">Register</button>
            <div className="already-account">
              <p>Already have an account?</p>
              <a href="/login" className="login-link">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
