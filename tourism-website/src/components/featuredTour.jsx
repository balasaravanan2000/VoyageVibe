import React from 'react';
import { Clock, Users, Star, Camera, Mountain, Utensils } from 'lucide-react';

const FeaturedTours = () => {
  const tours = [
   
    {
      id: 2,
      title: 'Southeast Asia Adventure',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '21 days',
      maxGuests: 16,
      rating: 4.8,
      reviews: 203,
      price: 1899,
      originalPrice: 2199,
      countries: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
      highlights: [
        'Authentic cultural experiences',
        'Street food tours',
        'Temple explorations',
        'River cruises'
      ],
      includes: ['Transportation', 'Accommodation', 'Some Meals', 'Guide'],
      discount: 14
    },
    {
      id: 3,
      title: 'African Safari Experience',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 days',
      maxGuests: 12,
      rating: 4.9,
      reviews: 98,
      price: 3499,
      originalPrice: 3899,
      countries: ['Kenya', 'Tanzania'],
      highlights: [
        'Big Five wildlife viewing',
        'Luxury safari lodges',
        'Hot air balloon rides',
        'Maasai village visits'
      ],
      includes: ['All Transportation', 'Luxury Lodges', 'All Meals', 'Game Drives'],
      discount: 10
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated multi-destination tours with expert guides, luxury accommodations, 
            and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {tour.discount}% OFF
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {tour.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Max {tour.maxGuests}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {tour.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">({tour.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Countries Visited:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.countries.map((country, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.includes.map((item, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">
                          ${tour.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${tour.originalPrice}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">per person</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;