import React, { useState } from 'react';

// Professional site header with logo, title and navigation
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <span className="logo-icon" role="img" aria-label="airplane">✈️</span>
          <div className="logo-text">
            <h1 className="logo-title">Travel Booking System</h1>
            <p className="logo-subtitle">Book Your Dream Destination</p>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <button className="nav-link" onClick={() => handleNavClick('home')}>Home</button>
          <button className="nav-link" onClick={() => handleNavClick('destinations')}>Destinations</button>
          <button className="nav-link" onClick={() => handleNavClick('bookings')}>Bookings</button>
          <button className="nav-link" onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
