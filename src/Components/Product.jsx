import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Fetch products from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleRemoveFromWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    setWishlist(newWishlist);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/payment'); // Navigate to payment page
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <div className="search-cart-wishlist">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="icons">
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <i className="fas fa-shopping-cart"></i>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
          <div className="wishlist-icon" onClick={() => setShowWishlist(!showWishlist)}>
            <i className="fas fa-heart"></i>
            {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
          </div>
        </div>
      </div>

      {showCart && (
        <div className="cart-summary">
          <button className="close-button" onClick={() => setShowCart(false)}>&times;</button>
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                  <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
          )}
        </div>
      )}

      {showWishlist && (
        <div className="wishlist-summary">
          <button className="close-button" onClick={() => setShowWishlist(false)}>&times;</button>
          <h3>Wishlist</h3>
          {wishlist.length === 0 ? (
            <p>No items in wishlist.</p>
          ) : (
            <ul>
              {wishlist.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price}
                  <button onClick={() => handleRemoveFromWishlist(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>₹{product.price}</p>
              <p>{product.description}</p>
              <div className="buttons">
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
