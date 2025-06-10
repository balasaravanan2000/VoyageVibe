import React from 'react';
import { Plane, Shield, Headphones, Calendar, Map, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Flight Bookings',
      description: 'Find and book the best flight deals worldwide with our extensive airline partnerships.',
      features: ['Best Price Guarantee', '24/7 Flight Support', 'Flexible Booking Options']
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel protection to ensure your peace of mind during your adventures.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Luggage Protection']
    },
    {
      icon: Calendar,
      title: 'Custom Itineraries',
      description: 'Personalized travel planning tailored to your preferences and budget.',
      features: ['Personal Travel Advisor', 'Custom Route Planning', 'Local Recommendations']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support wherever you are in the world.',
      features: ['Emergency Assistance', 'Live Chat Support', 'Phone Support']
    },
    {
      icon: Map,
      title: 'Local Guides',
      description: 'Expert local guides who know the hidden gems and authentic experiences.',
      features: ['Certified Guides', 'Multiple Languages', 'Cultural Insights']
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning memories with our professional photography tour packages.',
      features: ['Pro Photography Tips', 'Best Photo Spots', 'Equipment Provided']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and unforgettable. 
            From planning to execution, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Planning Your Trip?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our travel experts are here to help you create the perfect itinerary. 
              Get personalized recommendations and insider tips for your destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Talk to an Expert
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;