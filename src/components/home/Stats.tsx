import React from 'react';

const Stats:React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">20K</h3>
            <p className="text-gray-600">Award Winning</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">5K</h3>
            <p className="text-gray-600">Property Ready</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600">Happy Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;