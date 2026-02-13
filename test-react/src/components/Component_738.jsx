import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="sticky top-0 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4">
          <img src="https://static.photos/travel/300x300/140.webp" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-pink-500">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-pink-500">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-pink-500">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-pink-500">Contact</a></li>
            </ul>
          </nav>
          <a href="#" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/139.webp')" }}>
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl text-white font-bold">Welcome to our travel agency</h1>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl text-center mb-8">Our Itineraries</h2>
          {/* Add your itinerary details here */}
        </section>

        <section className="my-8">
          <h2 className="text-3xl text-center mb-8">Pricing Details</h2>
          {/* Add your pricing details here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;