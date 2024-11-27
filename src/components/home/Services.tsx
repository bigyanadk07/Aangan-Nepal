import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wallet, 
  BadgeDollarSign, 
  ShieldCheck,
} from 'lucide-react';

const servicesData = [
  {
    icon: Building2,
    title: "Property Management",
    description: "Comprehensive management solutions for property owners",
    iconBgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-50"
  },
  {
    icon: Wallet,
    title: "Mortgage Services",
    description: "Tailored financial guidance for your property investment",
    iconBgColor: "bg-green-100",
    hoverColor: "hover:bg-green-50"
  },
  {
    icon: BadgeDollarSign,
    title: "Investment Consulting",
    description: "Strategic insights for maximizing real estate returns",
    iconBgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-50"
  },
  {
    icon: ShieldCheck,
    title: "Legal Support",
    description: "Comprehensive legal assistance throughout your journey",
    iconBgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-50"
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-800 leading-tight">
              Comprehensive Real Estate Solutions
            </h2>
            <div className="space-y-6">
              {servicesData.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`
                    flex items-center space-x-5 
                    p-5 rounded-xl 
                    transition-all duration-300 
                    ${service.hoverColor}
                    hover:shadow-md
                    group
                  `}
                >
                  <div className={`${service.iconBgColor} p-3 rounded-full`}>
                    <service.icon className={`w-7 h-7 text-${service.iconBgColor.replace('bg-', '')}-600 group-hover:rotate-6 transition-transform`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <img
              src="https://imgs.search.brave.com/NxTIW6ACnKmLeF65QRfB2QN5dCUMmCuXbj4EE2vRAaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzcw/L2JmLzNiNzBiZjM4/NzFhNzY3MDA4MmNh/MTUyYWYyNmJkM2Iy/LmpwZw"
              alt="Modern building"
              className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-2xl group-hover:opacity-10 transition-opacity"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;