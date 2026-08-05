import React from 'react';

// Displays booking statistics as summary cards
function Dashboard({ stats }) {
  const { totalBookings, domesticTrips, internationalTrips, totalTravelers } = stats;

  const statCards = [
    { label: 'Total Bookings', value: totalBookings, icon: '🧳', color: '#2563EB' },
    { label: 'Domestic Trips', value: domesticTrips, icon: '🏖️', color: '#16A34A' },
    { label: 'International Trips', value: internationalTrips, icon: '🌍', color: '#F97316' },
    { label: 'Total Travelers', value: totalTravelers, icon: '👤', color: '#38BDF8' }
  ];

  return (
    <div className="dashboard-stats">
      {statCards.map((stat) => (
        <div className="stat-card card" key={stat.label}>
          <div className="stat-icon" style={{ backgroundColor: `${stat.color}1A`, color: stat.color }}>
            {stat.icon}
          </div>
          <div className="stat-info">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
