import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-red-700">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with our expert team for personalized real estate solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Office Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>Thamel, Kathmandu</p>
                  <p>Nepal</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+977 1 4444444</p>
                  <p>+977 1 4444445</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@aangannepal.com</p>
                  <p>support@aangannepal.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-red-700" />
              <h3 className="text-xl font-semibold">Office Hours</h3>
            </div>
            <div className="space-y-2">
              {officeHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between">
                  <span className="text-gray-600">{schedule.day}</span>
                  <span className="font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="bg-gray-100 p-3 rounded-full hover:bg-red-100 transition-colors"
                >
                  <social.icon className="w-6 h-6 text-red-700" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Our Location</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2704812876712!2d85.31234231503999!3d27.715013982787677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x58099b8d57ed12a7!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1645523456789!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;