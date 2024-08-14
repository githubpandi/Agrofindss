import React, { useState } from 'react';
import './Payment.css'; // Make sure to create a CSS file for styling

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process payment here (mocking success for demo purposes)
    setSuccess(true);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      {success ? (
        <div className="success-message">
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
