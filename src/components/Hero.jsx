import React from 'react';

// Hero banner section with heading and call-to-action button
function Hero() {
  const scrollToBooking = () => {
    const section = document.getElementById('booking-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-tagline">🌍 Discover • 🏖️ Relax • 🏔️ Explore</p>
        <h2 className="hero-heading">Explore the World with Us</h2>
        <p className="hero-subtext">
          Handpicked destinations, unforgettable experiences, and seamless bookings —
          all in one place.
        </p>
        <button className="btn btn-primary hero-btn" onClick={scrollToBooking}>
          🧳 Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
