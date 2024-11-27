import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Agent {
  name: string;
  image: string;
  role?: string;
  email?: string;
}

const agents: Agent[] = [
  {
    name: 'Bigyan Adhikari',
    image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png',
    role: 'Senior Real Estate Agent',
    email: 'bigyan.a@example.com'
  },
  {
    name: 'Prakriti Phuyal',
    image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png',
    role: 'Property Consultant',
    email: 'prakriti.p@example.com'
  },
  {
    name: 'Saroj Budhathoki',
    image: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png',
    role: 'Client Relations Manager',
    email: 'saroj.b@example.com'
  },
];

const Agents: React.FC = () => {
  const [visibleAgents, setVisibleAgents] = useState(3);

  const handleViewMore = () => {
    setVisibleAgents(prevVisible => 
      prevVisible === 3 ? agents.length : 3
    );
  };

  return (
    <section 
      className="py-16 bg-white" 
      aria-labelledby="agents-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="agents-heading" 
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            Our Exclusive Agents
          </h2>
          <button 
            onClick={handleViewMore}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 flex items-center justify-center mx-auto"
          >
            {visibleAgents === 3 ? 'View More' : 'View Less'}
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {agents.slice(0, visibleAgents).map((agent) => (
            <div 
              key={agent.name} 
              className="text-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={agent.image}
                alt={`Portrait of ${agent.name}`}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                {agent.name}
              </h3>
              {agent.role && (
                <p className="text-gray-600 text-sm mb-2">
                  {agent.role}
                </p>
              )}
              {agent.email && (
                <a 
                  href={`mailto:${agent.email}`} 
                  className="text-blue-600 hover:underline text-sm"
                >
                  {agent.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;