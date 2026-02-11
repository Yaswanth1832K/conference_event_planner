import React, { useState, useEffect } from 'react';
import "./TotalCost.css";
import Checkout from "./Checkout";

const TotalCost = ({ totalCosts, ItemsDisplay, items }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const handleSubmitCheckout = (formData) => {
    console.log("Form Submitted:", formData);
    setShowCheckout(false);
    setIsSuccess(true);
  };

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost for the event</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${totalCosts.total}
          </h2>
          <div className="render_items">
            <ItemsDisplay />
          </div>
          <div className="total-actions">
            <button className="btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      {showCheckout && (
        <Checkout
          totalCosts={totalCosts}
          items={items}
          onClose={handleCloseCheckout}
          onSubmit={handleSubmitCheckout}
        />
      )}
      {isSuccess && (
        <div className="modal-overlay">
          <div className="modal-content success-content">
            <h2>🎉 Request Submitted!</h2>
            <p>Thank you for your enquiry. Our team will get back to you shortly.</p>
            <button className="btn-primary" onClick={() => window.location.reload()}>Plan Another Event</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalCost;
