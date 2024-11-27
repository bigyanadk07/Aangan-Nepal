import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home as Search, Filter, ChevronDown } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Baluwatar',
    type: 'Apartment',
    location: 'Baluwatar, Kathmandu',
    price: 'NPR 1.5 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    features: ['3 Bedrooms', '2 Bathrooms', 'Parking'],
    area: '1,200 sq ft'
  },
  {
    id: 2,
    title: 'Traditional House in Patan',
    type: 'House',
    location: 'Patan, Lalitpur',
    price: 'NPR 2.8 Cr',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    features: ['4 Bedrooms', '3 Bathrooms', 'Garden'],
    area: '2,500 sq ft'
  },
  {
    id: 3,
    title: 'Commercial Space in Durbar Marg',
    type: 'Commercial',
    location: 'Durbar Marg, Kathmandu',
    price: 'NPR 4.2 Cr',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    features: ['Open Floor Plan', 'Reception Area', 'Meeting Rooms'],
    area: '3,000 sq ft'
  },
  {
    id: 4,
    title: 'Luxury Villa in Budhanilkantha',
    type: 'House',
    location: 'Budhanilkantha, Kathmandu',
    price: 'NPR 5.5 Cr',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    features: ['5 Bedrooms', '4 Bathrooms', 'Swimming Pool'],
    area: '4,500 sq ft'
  },
  {
    id: 5,
    title: 'Office Space in Thapathali',
    type: 'Commercial',
    location: 'Thapathali, Kathmandu',
    price: 'NPR 3.8 Cr',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
    features: ['Modern Design', 'Parking', 'Security'],
    area: '2,800 sq ft'
  },
  {
    id: 6,
    title: 'Penthouse in Jhamsikhel',
    type: 'Apartment',
    location: 'Jhamsikhel, Lalitpur',
    price: 'NPR 2.9 Cr',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=80',
    features: ['3 Bedrooms', 'Terrace', 'City View'],
    area: '1,800 sq ft'
  },
  {
    id: 7,
    title: 'Cozy Cottage in Godavari',
    type: 'House',
    location: 'Godavari, Lalitpur',
    price: 'NPR 1.2 Cr',
    image: 'https://i.pinimg.com/736x/ed/30/83/ed3083decec012a6417100a16da9e6ad.jpg',
    features: ['2 Bedrooms', '1 Bathroom', 'Garden'],
    area: '900 sq ft'
  },
  {
    id: 8,
    title: 'Elegant Duplex in Hattiban',
    type: 'House',
    location: 'Hattiban, Lalitpur',
    price: 'NPR 3.5 Cr',
    image: 'https://i.pinimg.com/736x/3d/ee/0a/3dee0a437d1dbaacb34bd71b9d504880.jpg',
    features: ['4 Bedrooms', '3 Bathrooms', 'Terrace'],
    area: '2,800 sq ft'
  },
  {
    id: 9,
    title: 'Spacious Office in New Baneshwor',
    type: 'Commercial',
    location: 'New Baneshwor, Kathmandu',
    price: 'NPR 6.0 Cr',
    image: 'https://i.pinimg.com/736x/ca/b1/c2/cab1c2d4fe31ff791294c66f520951ca.jpg',
    features: ['Conference Room', 'Parking', 'Reception'],
    area: '4,000 sq ft'
  },
  {
    id: 10,
    title: 'Stylish Studio in Lazimpat',
    type: 'Apartment',
    location: 'Lazimpat, Kathmandu',
    price: 'NPR 90 Lakh',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1000&q=80',
    features: ['1 Bedroom', 'Furnished', 'City View'],
    area: '450 sq ft'
  },
  {
    id: 11,
    title: 'Modern Office in Jhamsikhel',
    type: 'Commercial',
    location: 'Jhamsikhel, Lalitpur',
    price: 'NPR 5.0 Cr',
    image: 'https://i.pinimg.com/736x/ee/d9/6b/eed96b6a0bcd7b3af4e0e66dbde55bda.jpg',
    features: ['High-Speed Internet', 'Parking', 'CCTV'],
    area: '3,500 sq ft'
  },
  {
    id: 12,
    title: 'Charming Villa in Bhaktapur',
    type: 'House',
    location: 'Bhaktapur, Bhaktapur',
    price: 'NPR 4.8 Cr',
    image: 'https://i.pinimg.com/736x/0c/33/3c/0c333cb46603ae5e0a79def92da8332a.jpg',
    features: ['5 Bedrooms', 'Swimming Pool', 'Spacious Garden'],
    area: '5,000 sq ft'
  },
  {
    id: 13,
    title: 'Compact Flat in Koteshwor',
    type: 'Apartment',
    location: 'Koteshwor, Kathmandu',
    price: 'NPR 65 Lakh',
    image: 'https://i.pinimg.com/736x/2b/1a/5e/2b1a5e6c15a4ba603e945f4f6c731add.jpg',
    features: ['2 Bedrooms', 'Balcony', '24/7 Security'],
    area: '800 sq ft'
  },
  {
    id: 14,
    title: 'Luxury Penthouse in Maharajgunj',
    type: 'Apartment',
    location: 'Maharajgunj, Kathmandu',
    price: 'NPR 3.2 Cr',
    image: 'https://i.pinimg.com/736x/2b/1a/5e/2b1a5e6c15a4ba603e945f4f6c731add.jpg',
    features: ['4 Bedrooms', 'Private Pool', 'Skyline View'],
    area: '2,200 sq ft'
  },
  {
    id: 15,
    title: 'Retail Space in Bhaktapur Durbar Square',
    type: 'Commercial',
    location: 'Bhaktapur Durbar Square, Bhaktapur',
    price: 'NPR 2.5 Cr',
    image: 'https://i.pinimg.com/736x/a9/a7/63/a9a763ccd0c6962d4b32b963f1bdb8da.jpg',
    features: ['Prime Location', 'Wide Entrance', 'Parking'],
    area: '2,000 sq ft'
  },
  {
    id: 16,
    title: 'Minimalist Apartment in Sanepa',
    type: 'Apartment',
    location: 'Sanepa, Lalitpur',
    price: 'NPR 1.8 Cr',
    image: 'https://i.pinimg.com/736x/a9/a7/63/a9a763ccd0c6962d4b32b963f1bdb8da.jpg',
    features: ['2 Bedrooms', 'Rooftop Access', 'Modern Design'],
    area: '1,100 sq ft'
  }

];

const Properties:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-8 text-red-700">Featured Properties</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location or property name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-8 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm">
                {property.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <div className="border-t border-b py-4 my-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-semibold">{property.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Features</p>
                    <p className="font-semibold">{property.features[0]}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-700">{property.price}</span>
                <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Properties;