import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/08/24/19/27/houses-5514892_1280.jpg"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div 
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src={backgroundImages[currentImageIndex]}
          alt="Property background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            आंगन Nepal
          </h1>
          <p className="text-2xl mb-10 font-light tracking-wide">
            Transforming Dreams into Homes, One Property at a Time
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-blue-600 text-white 
              px-8 py-3 
              rounded-lg 
              hover:bg-blue-700 
              transition-colors 
              flex items-center 
              space-x-3 
              mx-auto
            "
          >
            <Link to="/properties">Explore Properties</Link>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;