import React from 'react';
import DestinationCard from './DestinationCard';

// Renders the grid of six destination cards
function DestinationList({ destinations, onBook }) {
  return (
    <section id="destinations" className="destinations-section">
      <div className="section-header">
        <h2>🌍 Popular Destinations</h2>
        <p>Choose from our top handpicked travel spots around the world</p>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}

export default DestinationList;
