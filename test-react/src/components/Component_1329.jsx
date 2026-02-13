import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Travel Agency</h1>
          <p className="text-sm">Book your dream vacation today with us and get a 20% discount on your first trip.</p>
        </div>
        <div>
          <input type="text" placeholder="Search destinations" className="p-2 rounded-l" />
          <button className="bg-yellow-700 text-white p-2 rounded-r">Search</button>
        </div>
      </header>
      <section className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Discover our popular destinations</h2>
        <div className="flex justify-around">
          <div>
            <img src="https://static.photos/travel/900x600/131.webp" alt="Beach" className="mb-2" />
            <p>Experience the best beaches in the world.</p>
          </div>
          <div>
            <img src="https://static.photos/travel/900x600/132.webp" alt="Mountain" className="mb-2" />
            <p>Explore the breathtaking mountains.</p>
          </div>
          <div>
            <img src="https://static.photos/travel/900x600/133.webp" alt="City" className="mb-2" />
            <p>Immerse yourself in the vibrant city life.</p>
          </div>
        </div>
      </section>
      <section className="bg-yellow-500 text-white p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to book your trip?</h2>
        <p className="mb-2">We are here to help you plan your dream vacation.</p>
        <button className="bg-white text-yellow-500 p-2 rounded">Book Now</button>
      </section>
    </div>
  );
};

export default GeneratedComponent;