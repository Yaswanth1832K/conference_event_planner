import React, { useState } from 'react';
import './ConferenceEvent.css';

const Checkout = ({ totalCosts, items, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Finalize Your Event Plan</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    <div className="summary-section">
                        <h3>Event Summary</h3>
                        <ul className="summary-list">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <span>{item.name} {item.type === 'meals' ? '' : `(x${item.quantity})`}</span>
                                    <span>${item.type === 'meals' ? item.cost * item.quantity : item.cost * (item.quantity || 1)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="summary-total">
                            <strong>Total Estimated Cost:</strong>
                            <span>${totalCosts.total}</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Company / Organization</label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Additional Notes</label>
                            <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange}></textarea>
                        </div>

                        <div className="modal-actions">
                            <button type="button" className="btn-secondary" onClick={onClose}>Back</button>
                            <button type="submit" className="btn-primary">Confirm & Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
