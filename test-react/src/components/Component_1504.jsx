import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="relative">
        <img src="https://static.photos/travel/900x600/106.webp" alt="Header Image" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white">Welcome to our Travel Agency</h1>
        </div>
      </header>

      <section className="py-10">
        <h2 className="text-3xl text-center">Our Popular Destinations</h2>
        {/* Sliding banner here */}
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl">About Us</h3>
            <p>
              At our travel agency, we specialize in creating unforgettable travel experiences for our clients. We understand that every traveler is unique and we strive to provide a personalized service that caters to their individual needs and preferences. Whether you're looking for a romantic getaway, a family vacation, a business trip, or a solo adventure, we're here to help you plan your next adventure.
            </p>
          </div>
          <div>
            <h3 className="text-2xl">Popular Destinations</h3>
            <ul>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Paris</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">New York</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500">Tokyo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#"><img src="https://static.photos/travel/900x600/107.webp" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#"><img src="https://static.photos/travel/900x600/108.webp" alt="Twitter" className="w-6 h-6" /></a>
              <a href="#"><img src="https://static.photos/travel/900x600/109.webp" alt="Instagram" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;