import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-700 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">आंगन Nepal</h3>
          <p className="text-sm">
            Your trusted partner in finding your dream property. From cozy homes to luxurious apartments, we make it easy for you to own the perfect space in Nepal.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/properties" className="hover:underline">Properties</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +977-1234567890
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              info@aangannepal.com
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 mr-2"></span>
              Kathmandu, Nepal
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} आंगन Nepal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
