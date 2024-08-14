import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavbar.css';

const SideNavbar = ({ adminName }) => {
  return (
    <div className="side-navbar">
      <ul>
        <li><Link to="/admin/user-details"><i className="fas fa-user"></i> User Details</Link></li>
        <li><Link to="/admin/product-details"><i className="fas fa-box"></i> Product Details</Link></li>
        <li><Link to="/admin/order-details"><i className="fas fa-receipt"></i> Order Details</Link></li>
        <li><Link to="/admin/schemes"><i className="fas fa-hand-holding-usd"></i> Schemes</Link></li>
        <li><Link to="/admin/crops-info"><i className="fas fa-seedling"></i> Crops Info</Link></li>
        <li><Link to="/admin/soil-info"><i className="fas fa-leaf"></i> Soil Info</Link></li>
      </ul>
      <div className="admin-info">
        <p>{adminName}</p>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default SideNavbar;
