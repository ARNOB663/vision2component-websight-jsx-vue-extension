import React from 'react';

const PropertyCard = ({ imageUrl, title, description, linkText }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={imageUrl} alt="Property" />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{description}</p>
    <a href="#" className="text-green-500 hover:text-green-700">{linkText}</a>
  </div>
);

const GeneratedComponent = () => (
  <>
    <nav className="bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <img src="https://static.photos/real-estate/300x300/73.webp" alt="Logo" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
      </div>
    </nav>

    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to our Real Estate Agency</h1>
      <p className="mb-6">We are a professional real estate agency that specializes in finding the perfect home for you. With a team of experienced realtors on hand to guide you through the home buying process, we make it easy to find your dream home.</p>

      <div className="grid grid-cols-3 gap-4">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/74.webp" 
          title="House for Sale" 
          description="This is a beautiful house for sale. It has 3 bedrooms and 2 bathrooms." 
          linkText="View Details"
        />
        {/* Repeat the above PropertyCard for each property */}
      </div>
    </div>
  </>
);

export default GeneratedComponent;