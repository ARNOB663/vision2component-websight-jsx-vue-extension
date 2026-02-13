import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-red-500 text-white p-4 text-center">
        <h1 className="text-4xl">Welcome to our Travel Agency</h1>
        <p className="text-xl">Discover the world with us</p>
        <button className="bg-white text-red-500 p-2 rounded mt-4">Book a trip</button>
      </header>

      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Destinations</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://static.photos/travel/900x600/101.webp" alt="Beach" />
            <h3 className="text-2xl mt-2">Beach</h3>
            <p>Experience the best beaches in the world.</p>
          </div>
          {/* Repeat the above div for each destination */}
        </div>
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Travel Packages</h2>
        {/* Add your travel packages here */}
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Customer Photos</h2>
        {/* Add your customer photos here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;