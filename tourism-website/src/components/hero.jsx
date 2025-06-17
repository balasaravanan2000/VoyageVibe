import React from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block text-blue-400">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will change your perspective forever.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />
              </div>
            </div>

            {/* Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">When?</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 appearance-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3-5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div>
            <div className="text-3xl font-bold text-blue-400">50K+</div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">200+</div>
            <div className="text-gray-300">Destinations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

 export default Hero;