import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">WanderLust</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for unforgettable adventures around the world. 
              We create memories that last a lifetime.

              
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Destinations</a></li>
              <li><a href="#tours" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Tours</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Travel Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Travel Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Adventure Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Luxury Travel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Cultural Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Beach Holidays</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Safari Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Honeymoon Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@wanderlust.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Travel Street<br />
                  Adventure City, AC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for travel tips, deals, and destination inspiration.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WanderLust. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;