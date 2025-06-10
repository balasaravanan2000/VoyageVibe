import React, { useState } from 'react';
import { Star, Heart, MapPin, Calendar, Users } from 'lucide-react';

const PopularDestinations = ({ searchQuery }) => {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-island-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      reviews: 2847,
      price: 1299,
      duration: '7 days',
      description: 'Experience the magical sunsets and whitewashed buildings of this Greek paradise.',
      highlights: ['Sunset Views', 'Wine Tasting', 'Volcanic Beaches', 'Traditional Villages']
    },
    {
      id: 2,
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 3251,
      price: 899,
      duration: '10 days',
      description: 'Discover tropical paradise with ancient temples and pristine beaches.',
      highlights: ['Temple Tours', 'Beach Relaxation', 'Cultural Experience', 'Spa Treatments']
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      reviews: 1923,
      price: 1599,
      duration: '8 days',
      description: 'Immerse yourself in the perfect blend of traditional culture and modern innovation.',
      highlights: ['Cherry Blossoms', 'Sushi Experience', 'Tech Culture', 'Historic Temples']
    },
    {
      id: 4,
      name: 'Machu Picchu',
      country: 'Peru',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      reviews: 1456,
      price: 1199,
      duration: '6 days',
      description: 'Trek to the ancient Incan citadel nestled high in the Andes Mountains.',
      highlights: ['Inca Trail', 'Ancient Ruins', 'Mountain Views', 'Local Culture']
    },
    {
      id: 5,
      name: 'Maldives',
      country: 'Maldives',
      image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 2134,
      price: 2299,
      duration: '5 days',
      description: 'Relax in overwater bungalows surrounded by crystal-clear turquoise waters.',
      highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Fine Dining']
    },
    {
      id: 6,
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      reviews: 2876,
      price: 1499,
      duration: '6 days',
      description: 'Experience luxury and adventure in this modern desert metropolis.',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping', 'World-class Dining']
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'budget') return matchesSearch && destination.price < 1200;
    if (filter === 'luxury') return matchesSearch && destination.price >= 1200;
    return matchesSearch;
  });

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing places around the world. From tropical paradises to cultural treasures, 
            find your perfect getaway destination.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setFilter('budget')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === 'budget' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Budget Friendly
            </button>
            <button
              onClick={() => setFilter('luxury')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === 'luxury' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Luxury
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(destination.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {destination.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">({destination.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${destination.price}
                    </span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPin className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDestinations;