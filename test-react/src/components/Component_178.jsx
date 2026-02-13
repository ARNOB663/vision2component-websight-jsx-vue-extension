import React from 'react';

const PropertyCard = ({ imageUrl, address, price }) => (
  <div className="bg-white p-4 rounded shadow">
    <img src={imageUrl} alt="Property Image" className="w-full h-64 object-cover mb-4" />
    <h2 className="text-xl font-bold mb-2">{address}</h2>
    <p className="text-green-600 font-bold mb-4">${price}</p>
    <button className="bg-green-600 text-white px-4 py-2 rounded">View Details</button>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-orange-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Welcome to Our Real Estate Agency</h1>
      <p className="text-center mb-8">We are a professional real estate agency that specializes in finding your dream home. With a wide selection of properties, we guarantee to find the perfect match for you.</p>
      <div className="grid grid-cols-3 gap-4">
        <PropertyCard 
          imageUrl="https://picsum.photos/seed/178/900/600" 
          address="123 Main St, City, Country" 
          price="500,000"
        />
        {/* Repeat the above PropertyCard for each property listing */}
      </div>
    </div>
  </div>
);

export { GeneratedComponent };