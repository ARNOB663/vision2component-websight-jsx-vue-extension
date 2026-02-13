import React from 'react';

const PropertyCard = ({ imageSrc, title, description, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img className="w-full" src={imageSrc} alt={title} />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-bold mt-4">${price}</p>
    </div>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Real Estate</h1>
      <div className="grid grid-cols-3 gap-4">
        <PropertyCard 
          imageSrc="https://static.photos/real-estate/900x600/143.webp" 
          title="House for Sale" 
          description="This is a beautiful house located in the heart of the city. It has 3 bedrooms and 2 bathrooms. It is a great investment opportunity." 
          price="500,000"
        />
        {/* Repeat the above PropertyCard for each property */}
      </div>
    </div>
  </div>
);

export default GeneratedComponent;