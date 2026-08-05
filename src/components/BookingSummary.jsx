import React from 'react';
import Dashboard from './Dashboard';

// Booking summary dashboard: stats + recent booking + full booking list + empty state
function BookingSummary({ bookings, stats, onDelete }) {
  const latestBooking = bookings[bookings.length - 1];

  return (
    <section id="bookings" className="summary-section">
      <div className="section-header">
        <h2>📊 Booking Summary Dashboard</h2>
        <p>Track all your travel bookings in one place</p>
      </div>

      <Dashboard stats={stats} />

      {bookings.length === 0 ? (
        <div className="empty-state card">
          <span className="empty-icon" role="img" aria-label="suitcase">🧳</span>
          <p>No bookings available. Start your first journey.</p>
        </div>
      ) : (
        <>
          <div className="recent-booking card glass">
            <h3>🕒 Recent Booking</h3>
            <div className="recent-booking-details">
              <p><strong>👤 Name:</strong> {latestBooking.customerName}</p>
              <p><strong>🌍 Destination:</strong> {latestBooking.destination}</p>
              <p><strong>📅 Date:</strong> {latestBooking.travelDate}</p>
              <p><strong>🧳 Travelers:</strong> {latestBooking.travelers}</p>
              <p><strong>🏖️ Package:</strong> {latestBooking.packageType}</p>
              <p><strong>💰 Budget:</strong> {latestBooking.budget}</p>
            </div>
          </div>

          <div className="booking-list">
            {bookings.slice().reverse().map((booking) => (
              <div className="booking-item card" key={booking.id}>
                <div className="booking-item-info">
                  <h4>{booking.customerName}</h4>
                  <p>🌍 {booking.destination} • 📅 {booking.travelDate} • 🧳 {booking.travelers} traveler(s)</p>
                  <p>🏖️ {booking.packageType} • 💰 {booking.budget}</p>
                  <p className="booking-contact">📧 {booking.email} • 📱 {booking.phone}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(booking.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default BookingSummary;
