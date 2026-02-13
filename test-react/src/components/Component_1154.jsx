import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Travel Agency</h1>
        <p className="text-lg text-center mb-8">
          At our travel agency, we specialize in providing unforgettable travel experiences. We understand that every traveler is unique, and we strive to create a personalized journey that fits your needs and desires. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help you plan your next adventure.
        </p>
        <div className="relative">
          <video className="w-full" autoPlay loop muted>
            <source src="https://static.photos/travel/900x600/156.webp" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <input className="w-1/2 p-2 rounded-lg" type="text" placeholder="Search for your next adventure" />
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our World Map</h2>
          <p className="mb-4">
            Here is a map of our services. Click on a country to see our travel packages for that destination.
          </p>
          <img className="w-full" src="https://static.photos/travel/900x600/156.webp" alt="World Map" />
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
          <div className="flex flex-col">
            <div className="p-4 mb-4 bg-white rounded-lg">
              <p className="text-lg">
                "I had the best trip ever with my family. The staff was friendly and the hotels were amazing. I would definitely recommend this travel agency to anyone."
              </p>
              <p className="text-right text-sm mt-2">- John Doe</p>
            </div>
            <div className="p-4 mb-4 bg-white rounded-lg">
              <p className="text-lg">
                "I was very impressed with the professionalism of the travel agency. They were able to find a very affordable flight for my business trip. I would definitely use them again."
              </p>
              <p className="text-right text-sm mt-2">- Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;