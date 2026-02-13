import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/travel/300x300/153.webp" alt="Logo" className="h-10" />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </header>
      <section className="w-full">
        <img src="https://static.photos/travel/900x600/154.webp" alt="Travel Image" className="w-full" />
      </section>
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to our Travel Agency</h1>
        <p className="mb-4">
          At our travel agency, we specialize in providing unforgettable travel experiences. We understand that every traveler is unique and we strive to create a personalized travel plan that fits your needs and desires. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help you plan your next adventure.
        </p>
        <p className="mb-4">
          Our team of experienced travel agents are passionate about travel and are committed to providing you with the best service possible. We understand that planning a trip can be overwhelming, which is why we offer a wide range of travel packages to suit your budget and preferences.
        </p>
      </section>
      <section className="p-4 flex justify-between">
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Destinations</h2>
          {/* Add your destinations here */}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Travel Packages</h2>
          {/* Add your travel packages here */}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold mb-4">Testimonials</h2>
          {/* Add your testimonials here */}
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;