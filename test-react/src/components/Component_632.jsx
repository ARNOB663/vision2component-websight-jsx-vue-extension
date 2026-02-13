import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <input type="text" placeholder="Search location" className="p-2 rounded" />
          <button className="bg-white text-red-500 p-2 rounded">Book Now</button>
        </div>
      </header>

      <section className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to our travel agency</h1>
        <p className="mb-4">We are a dynamic travel agency that offers a wide range of exotic destinations. Our experienced team is dedicated to providing you with the best service and ensuring your trip is unforgettable.</p>
        <img src="https://static.photos/travel/900x600/34.webp" alt="Travel banner" className="w-full h-64 object-cover" />
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Book your trip</h2>
        {/* Add your calendar component here */}
      </section>

      <footer className="bg-red-500 text-white p-4">
        <div className="container mx-auto">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          {/* Add your contact form here */}
          <h3 className="text-xl font-bold mb-4">Travel Tips</h3>
          {/* Add your travel tips here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;