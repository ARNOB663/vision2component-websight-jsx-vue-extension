import React from 'react';

const GeneratedComponent = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/147.webp')" }}>
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="mt-0 text-4xl font-bold text-white leading-tight">Welcome to our travel agency</h1>
          <p className="text-white">We are a full-service travel agency specializing in creating unforgettable travel experiences for our clients. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help you plan your next adventure.</p>
          <div className="mt-12">
            <input type="text" placeholder="Enter your desired travel location" className="px-4 py-3 placeholder-gray-400 text-black bg-white rounded text-sm border-2 border-gray-400 focus:border-red-400 focus:outline-none" />
            <input type="text" placeholder="Enter your desired travel dates" className="px-4 py-3 placeholder-gray-400 text-black bg-white rounded text-sm border-2 border-gray-400 focus:border-red-400 focus:outline-none" />
            <button className="px-4 py-3 ml-3 bg-red-500 text-white text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GeneratedComponent;