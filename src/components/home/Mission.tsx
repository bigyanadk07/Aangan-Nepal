import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Shield, 
  TrendingUp, 
} from 'lucide-react';

const missionFeatures = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Instant assistance whenever you need it",
    iconBgColor: "bg-blue-100"
  },
  {
    icon: Users,
    title: "Top Team",
    description: "Experienced professionals dedicated to you",
    iconBgColor: "bg-green-100"
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Transparency and integrity guaranteed",
    iconBgColor: "bg-purple-100"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Deep understanding of real estate trends",
    iconBgColor: "bg-orange-100"
  }
];

const Mission: React.FC = () => {
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
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800 leading-tight">
              Reimagining Real Estate, One Home at a Time
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At आंगन Nepal, we're not just selling properties. We're crafting personalized journeys, 
              understanding your unique needs, and transforming houses into homes that tell your story.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {missionFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`${feature.iconBgColor} p-3 rounded-full`}>
                    <feature.icon className={`w-6 h-6 text-${feature.iconBgColor.replace('bg-', '')}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1073&q=80"
              alt="Real estate professionals"
              className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-2xl group-hover:opacity-10 transition-opacity"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;