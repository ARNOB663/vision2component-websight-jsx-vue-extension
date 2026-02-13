import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Travel Agency</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#flights" className="text-pink-500 hover:text-pink-700">Flights</a></li>
            <li><a href="#hotels" className="text-pink-500 hover:text-pink-700">Hotels</a></li>
            <li><a href="#tours" className="text-pink-500 hover:text-pink-700">Tours</a></li>
            <li><a href="#packages" className="text-pink-500 hover:text-pink-700">Packages</a></li>
          </ul>
        </nav>
      </header>

      <main className="mt-8">
        <section id="flights" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Flights</h2>
          <p>Discover our wide range of flights to popular travel destinations. We offer competitive prices and flexible booking options.</p>
        </section>

        <section id="hotels" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Hotels</h2>
          <p>We have a wide selection of hotels in top locations around the world. Whether you're looking for luxury hotels or budget-friendly options, we've got you covered.</p>
        </section>

        <section id="tours" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tours</h2>
          <p>Explore the world with our guided tours. We offer tours in various categories, from cultural tours to nature tours.</p>
        </section>

        <section id="packages" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Packages</h2>
          <p>Take a look at our travel packages. We offer everything you need for your trip, from flights and hotels to tours and activities.</p>
        </section>
      </main>

      <footer className="mt-8 flex justify-end">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </footer>
    </div>
  );
};

export default GeneratedComponent;