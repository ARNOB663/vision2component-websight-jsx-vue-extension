import React from 'react';

const PropertyCard = ({ imageUrl, title, description, buttonText }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt="Property" className="w-full" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    </div>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Real Estate Site</h1>
      <div className="grid grid-cols-3 gap-4">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/41.webp" 
          title="House for Sale" 
          description="This is a beautiful house located in the heart of the city. It has 3 bedrooms, 2 bathrooms, and a large backyard." 
          buttonText="View Details"
        />
        {/* Repeat the above PropertyCard for each property */}
      </div>
    </div>
  </div>
);

export default GeneratedComponent;