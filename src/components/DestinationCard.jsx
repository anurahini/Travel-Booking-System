import React from 'react';

// Renders a single destination card
function DestinationCard({ destination, onBook }) {
  const { emoji, gradient, country, description, price, rating, type } = destination;

  return (
    <div className="destination-card card">
      <div className="destination-image" style={{ background: gradient }}>
        <span className="destination-emoji" role="img" aria-label={country}>{emoji}</span>
        <span className="destination-type-badge">{type}</span>
      </div>
      <div className="destination-body">
        <div className="destination-title-row">
          <h3>{country}</h3>
          <span className="destination-rating">⭐ {rating}</span>
        </div>
        <p className="destination-description">{description}</p>
        <div className="destination-footer">
          <span className="destination-price">{price}</span>
          <button className="btn btn-outline" onClick={() => onBook(country)}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
