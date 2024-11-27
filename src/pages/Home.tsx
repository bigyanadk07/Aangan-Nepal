import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Stats from '../components/home/Stats';
import Agents from '../components/home/Agents';
import Services from '../components/home/Services';
import ContactSection from '../components/home/Contact';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Mission />
      <Stats />
      <Agents />
      <Services />
      <ContactSection />
    </motion.div>
  );
};

export default Home;