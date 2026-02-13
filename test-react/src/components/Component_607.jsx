import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-100">
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/8.webp')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl text-white font-bold mb-4">Welcome to our Travel Agency</h1>
            <p className="text-xl text-white mb-8">We are a full-service travel agency specializing in creating unforgettable experiences for our clients.</p>
            <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl text-center mb-8">Popular Destinations</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img src="https://static.photos/travel/900x600/9.webp" alt="Paris" className="mb-4" />
            <h3 className="text-xl mb-2">Paris</h3>
            <p className="text-gray-700">Experience the city of love with our Paris packages.</p>
          </div>
          {/* Repeat the above div for each destination */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;