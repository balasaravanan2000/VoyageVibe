import React, { useState } from 'react';
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import PopularDestinations from './components/populardestination.jsx';
import FeaturedTours from './components/featuredTour.jsx';
import Services from './components/service.jsx';
import Testimonials from './components/testimonials.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PopularDestinations searchQuery={searchQuery} />
      <FeaturedTours />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;