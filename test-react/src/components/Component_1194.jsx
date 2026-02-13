import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between">
          <a href="#" className="text-xl font-bold">Travel Agency</a>
          <div className="flex items-center">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-500">Destinations</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-500">About Us</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-500">Contact</a>
            <a href="#" className="px-3 py-2 text-white bg-indigo-500 hover:bg-indigo-600">Book Now</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-3">
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to our travel agency</h1>
          <p className="text-xl text-center mb-8">We are a team of travel experts who are passionate about helping you plan your next adventure.</p>
          <div className="relative">
            <input type="text" placeholder="Search destinations" className="px-4 py-2 rounded-full" />
            <button className="absolute right-0 top-0 mt-2 mr-2">Search</button>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Featured Destinations</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded shadow p-4">
              <img src="https://static.photos/business/900x600/196.webp" alt="Beach" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">Beach Destination</h3>
              <p className="text-gray-700">Experience the best beaches in the world.</p>
            </div>
            {/* Add more destinations here */}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-8 py-6">
        <div className="container mx-auto px-6">
          <p className="text-center">© 2022 Travel Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;