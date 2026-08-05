import React, { useState, useEffect } from 'react';

// Initial empty form state
const emptyForm = {
  customerName: '',
  email: '',
  phone: '',
  destination: '',
  travelDate: '',
  travelers: '',
  packageType: '',
  budget: ''
};

function BookingForm({ destinationNames, onAddBooking, prefillRequest }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Pre-fill destination field when user clicks "Book" on a destination card
  useEffect(() => {
    if (prefillRequest && prefillRequest.country) {
      setFormData((prev) => ({ ...prev, destination: prefillRequest.country }));
    }
  }, [prefillRequest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.destination) newErrors.destination = 'Please select a destination';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!formData.travelers || Number(formData.travelers) < 1) {
      newErrors.travelers = 'Number of travelers must be at least 1';
    }
    if (!formData.packageType) newErrors.packageType = 'Please select a package type';
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSuccessMessage('');
      return;
    }
    onAddBooking({ ...formData, id: Date.now() });
    setFormData(emptyForm);
    setSuccessMessage('🎉 Trip booked successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleClear = () => {
    setFormData(emptyForm);
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <section id="booking-form" className="booking-form-section">
      <div className="section-header">
        <h2>📅 Plan Your Trip</h2>
        <p>Fill in your details and let us handle the rest</p>
      </div>

      <form className="booking-form card glass" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="customerName">👤 Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="John Doe"
              value={formData.customerName}
              onChange={handleChange}
            />
            {errors.customerName && <span className="error-text">{errors.customerName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">📧 Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">📱 Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="destination">🌍 Destination</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option value="">Select a destination</option>
              {destinationNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            {errors.destination && <span className="error-text">{errors.destination}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="travelDate">📅 Travel Date</label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
            />
            {errors.travelDate && <span className="error-text">{errors.travelDate}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="travelers">🧳 Number of Travelers</label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              min="1"
              placeholder="2"
              value={formData.travelers}
              onChange={handleChange}
            />
            {errors.travelers && <span className="error-text">{errors.travelers}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="packageType">🏖️ Package Type</label>
            <select
              id="packageType"
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
            >
              <option value="">Select package type</option>
              <option value="Economy">Economy</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
            </select>
            {errors.packageType && <span className="error-text">{errors.packageType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="budget">💰 Budget</label>
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="$1500"
              value={formData.budget}
              onChange={handleChange}
            />
            {errors.budget && <span className="error-text">{errors.budget}</span>}
          </div>
        </div>

        {successMessage && <div className="success-banner">{successMessage}</div>}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">✈️ Book Trip</button>
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookingForm;
