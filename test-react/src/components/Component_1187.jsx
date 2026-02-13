import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <div className="relative">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://static.photos/travel/900x600/189.webp" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white">Welcome to our Travel Agency</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-center">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="https://static.photos/travel/900x600/189.webp" alt="Beach" className="w-full" />
            <h2 className="text-xl font-bold mt-4">Beach Destinations</h2>
          </div>
          {/* Repeat the above div for other destinations */}
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold">Travel Tips and FAQs</h2>
          {/* Add your travel tips and FAQs here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;