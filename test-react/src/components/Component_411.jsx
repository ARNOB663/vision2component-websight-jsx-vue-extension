import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img src="https://static.photos/architecture/900x600/13.webp" alt="Building" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Our Architecture Firm</h1>
            <p className="text-xl mt-4">We are a full-service architecture firm specializing in residential, commercial, and institutional design.</p>
            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="w-1/3 bg-white p-4">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
          {/* Portfolio items go here */}
        </div>
        <div className="w-2/3 bg-white p-4 ml-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          {/* About us content goes here */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;