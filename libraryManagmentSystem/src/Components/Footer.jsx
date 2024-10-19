import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Book Haven</h2>
            <p className="text-sm">Your favorite books, all in one place.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Book Haven. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a> |
            <a href="#" className="hover:text-gray-400"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;