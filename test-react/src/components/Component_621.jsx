import React from 'react';

const PropertyCard = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded shadow p-4">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const GeneratedComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Real Estate Agency</h1>
      <p className="mb-8">At our agency, we specialize in finding the perfect home for you. Whether you're looking for a luxury estate, a cozy cottage, or a spacious villa, we've got you covered. Our team of experienced real estate agents will help you find the property of your dreams.</p>

      <div className="relative">
        <input type="text" className="w-full p-2 border rounded" placeholder="Search for properties..." />
        <div className="absolute right-0 top-0 mt-2 mr-2">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/23.webp" 
          title="Property 1" 
          description="This is a beautiful property located in the heart of the city."
        />
        {/* Repeat the above PropertyCard for each property */}
      </div>
    </div>
  );
};

export default GeneratedComponent;