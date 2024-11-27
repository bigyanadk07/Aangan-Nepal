import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Globe } from 'lucide-react';

const About:React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Award, title: "Years of Excellence", value: "25+", description: "Serving since 1994" },
    { icon: Users, title: "Happy Clients", value: "10,000+", description: "Across Nepal" },
    { icon: Clock, title: "Properties Sold", value: "25,000+", description: "Successfully closed" },
    { icon: Globe, title: "Cities Covered", value: "20+", description: "Nationwide presence" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-red-700">About आंगन Nepal</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in Nepal's real estate market since 1994
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Our Legacy</h2>
          <p className="text-lg text-gray-700">
            Founded in the heart of Nepal, आंगन Nepal has been serving the community for over three decades. 
            We specialize in helping clients find their perfect property across Nepal's diverse landscape, 
            from the bustling streets of Kathmandu to the serene foothills of the Himalayas.
          </p>
          <p className="text-lg text-gray-700">
            Our team of experienced professionals understands the unique characteristics of Nepal's real 
            estate market and is committed to providing exceptional service to both local and international clients.
          </p>
          <div className="pt-4">
            <button className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors">
              Learn More About Our History
            </button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80"
            alt="Kathmandu Valley"
            className="rounded-lg shadow-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1582657118090-af35eefc4e48?auto=format&fit=crop&w=600&q=80"
            alt="Nepal Architecture"
            className="rounded-lg shadow-xl mt-8"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <stat.icon className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-lg font-semibold text-gray-700 mb-1">{stat.title}</p>
            <p className="text-gray-600">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Integrity", description: "We maintain the highest standards of professional ethics" },
            { title: "Excellence", description: "We strive for excellence in every transaction" },
            { title: "Client First", description: "Your satisfaction is our top priority" }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;