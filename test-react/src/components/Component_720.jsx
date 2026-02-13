import React from 'react';

const TripCard = ({ imageUrl, title, price, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-4">
    <img src={imageUrl} alt="Travel Image" className="w-full h-64 object-cover rounded-lg mb-4" />
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{price}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const GeneratedComponent = () => (
  <div className="container mx-auto px-4 py-8 bg-gray-100">
    <h1 className="text-4xl font-bold text-center mb-8">Welcome to our Travel Agency</h1>
    <p className="text-lg text-center mb-8">
      We are a premier travel agency specializing in providing unforgettable travel experiences. Our team of experienced travel agents are dedicated to helping you plan your dream vacation. Whether you're looking for a relaxing beach getaway, an adventurous trek, or a cultural immersion, we've got you covered.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TripCard 
        imageUrl="https://static.photos/travel/900x600/122.webp" 
        title="Travel to Paris" 
        price="Starting from $1,000" 
        description="Experience the vibrant culture, stunning architecture, and delicious food of Paris."
      />
      {/* Add more TripCard components for other trips */}
    </div>
  </div>
);

export default GeneratedComponent;