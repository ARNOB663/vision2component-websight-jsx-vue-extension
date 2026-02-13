import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-8" src="https://static.photos/travel/300x300/34.webp" alt="Travel Agency Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Destinations</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Packages</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      <div className="mt-6 px-6">
        <img className="w-full h-64 object-cover" src="https://static.photos/travel/900x600/35.webp" alt="Scenic Destinations" />
      </div>

      <div className="mt-6 px-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to our Travel Agency</h1>
        <p className="mt-4 text-gray-600">
          We are a premier travel agency specializing in providing unforgettable travel experiences to individuals and groups. Our mission is to make your journey as comfortable and enjoyable as possible. We offer a wide range of travel packages to suit every budget and taste. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we've got you covered.
        </p>
      </div>

      <div className="mt-6 px-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Destinations</h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <img className="w-full h-32 object-cover" src="https://static.photos/travel/900x600/36.webp" alt="Beach Destination" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Beach Destinations</h3>
          </div>
          <div>
            <img className="w-full h-32 object-cover" src="https://static.photos/travel/900x600/37.webp" alt="Mountain Destination" />
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Mountain Destinations</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;