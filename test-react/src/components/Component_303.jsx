import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/303/1600/900')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl text-white mb-4">Welcome to our travel agency</h1>
            <p className="text-xl text-white mb-8">We are a full-service travel agency specializing in creating unforgettable experiences for our clients.</p>
            <div className="flex justify-center">
              <input type="text" placeholder="Search destinations" className="px-4 py-2 rounded-l" />
              <button className="bg-gray-500 text-white px-4 py-2 rounded-r">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl text-center mb-8">Featured Destinations</h2>
        <div className="flex justify-between">
          <div className="w-1/3">
            <img src="https://picsum.photos/seed/303/900/600" alt="Beach" className="mb-4" />
            <h3 className="text-xl">Beach Destinations</h3>
            <p>Discover the best beaches in the world.</p>
          </div>
          <div className="w-1/3">
            <img src="https://picsum.photos/seed/303/900/600" alt="Mountain" className="mb-4" />
            <h3 className="text-xl">Mountain Destinations</h3>
            <p>Explore the breathtaking mountains.</p>
          </div>
          <div className="w-1/3">
            <img src="https://picsum.photos/seed/303/900/600" alt="City" className="mb-4" />
            <h3 className="text-xl">City Destinations</h3>
            <p>Experience the vibrant cities of the world.</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl text-center mb-8">Contact Us</h2>
        <div className="flex justify-between">
          <div className="w-1/3">
            <h3 className="text-xl">Address</h3>
            <p>123 Main St, Anytown, USA</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl">Email</h3>
            <p>info@travelagency.com</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl text-center mb-8">Map</h2>
        <div className="flex justify-center">
          <img src="https://picsum.photos/seed/303/900/600" alt="Map" />
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;