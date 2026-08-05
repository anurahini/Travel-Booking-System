import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import DestinationList from './components/DestinationList';
import BookingSummary from './components/BookingSummary';
import Footer from './components/Footer';
import './App.css';

// Static destination data (no backend required)
const destinationsData = [
  {
    id: 1,
    emoji: '🗽',
    gradient: 'linear-gradient(135deg, #2563EB, #38BDF8)',
    country: 'New York, USA',
    description: 'The city that never sleeps — skyscrapers, Broadway and Central Park.',
    price: '$1,200',
    rating: 4.8,
    type: 'Domestic'
  },
  {
    id: 2,
    emoji: '🏖️',
    gradient: 'linear-gradient(135deg, #16A34A, #38BDF8)',
    country: 'Miami, USA',
    description: 'Sun-soaked beaches, vibrant nightlife and turquoise waters.',
    price: '$950',
    rating: 4.6,
    type: 'Domestic'
  },
  {
    id: 3,
    emoji: '🏔️',
    gradient: 'linear-gradient(135deg, #F97316, #2563EB)',
    country: 'Aspen, USA',
    description: 'Majestic mountain views, skiing and cozy alpine getaways.',
    price: '$1,450',
    rating: 4.7,
    type: 'Domestic'
  },
  {
    id: 4,
    emoji: '🗼',
    gradient: 'linear-gradient(135deg, #2563EB, #F97316)',
    country: 'Paris, France',
    description: 'Romance, art and world-class cuisine in the City of Light.',
    price: '$2,100',
    rating: 4.9,
    type: 'International'
  },
  {
    id: 5,
    emoji: '🏝️',
    gradient: 'linear-gradient(135deg, #38BDF8, #16A34A)',
    country: 'Bali, Indonesia',
    description: 'Tropical paradise with lush rice terraces and serene beaches.',
    price: '$1,800',
    rating: 4.9,
    type: 'International'
  },
  {
    id: 6,
    emoji: '🕌',
    gradient: 'linear-gradient(135deg, #F97316, #16A34A)',
    country: 'Dubai, UAE',
    description: 'Futuristic skyline, desert safaris and luxury shopping.',
    price: '$2,400',
    rating: 4.8,
    type: 'International'
  }
];

function App() {
  const [bookings, setBookings] = useState([]);
  const [prefillRequest, setPrefillRequest] = useState(null);

  // Add a new booking to state
  const handleAddBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  // Delete a booking by id
  const handleDeleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  // Pre-fill the booking form when "Book" is clicked on a destination card
  const handleBookDestination = (country) => {
    // Include a timestamp so the form's effect re-triggers even if the
    // same destination is clicked twice in a row
    setPrefillRequest({ country, ts: Date.now() });
    const section = document.getElementById('booking-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const destinationNames = useMemo(
    () => destinationsData.map((d) => d.country),
    []
  );

  // Compute dashboard statistics from current bookings
  const stats = useMemo(() => {
    const totalBookings = bookings.length;
    let domesticTrips = 0;
    let internationalTrips = 0;
    let totalTravelers = 0;

    bookings.forEach((booking) => {
      const destInfo = destinationsData.find((d) => d.country === booking.destination);
      if (destInfo) {
        if (destInfo.type === 'Domestic') domesticTrips += 1;
        if (destInfo.type === 'International') internationalTrips += 1;
      }
      totalTravelers += Number(booking.travelers) || 0;
    });

    return { totalBookings, domesticTrips, internationalTrips, totalTravelers };
  }, [bookings]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <BookingForm
        destinationNames={destinationNames}
        onAddBooking={handleAddBooking}
        prefillRequest={prefillRequest}
      />
      <DestinationList destinations={destinationsData} onBook={handleBookDestination} />
      <BookingSummary bookings={bookings} stats={stats} onDelete={handleDeleteBooking} />
      <Footer />
    </div>
  );
}

export default App;
