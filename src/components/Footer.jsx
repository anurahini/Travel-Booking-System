import React from 'react';

// Site footer with company info and social links
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>✈️ Travel Booking System</h3>
          <p>Book Your Dream Destination</p>
        </div>

        <div className="footer-contact">
          <p>📧 support@travelbooking.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>

        <div className="footer-social">
          <span role="img" aria-label="facebook" className="social-icon">📘</span>
          <span role="img" aria-label="instagram" className="social-icon">📷</span>
          <span role="img" aria-label="twitter" className="social-icon">🐦</span>
          <span role="img" aria-label="youtube" className="social-icon">▶️</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Travel Booking System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
