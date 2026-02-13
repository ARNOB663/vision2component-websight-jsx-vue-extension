import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex items-center justify-center bg-white p-6">
        <img src="https://static.photos/travel/300x300/24.webp" alt="Travel Agency Logo" className="h-10 w-10 mr-4" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Destinations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Travel Tips</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Offers</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative">
          <img src="https://static.photos/travel/900x600/25.webp" alt="Travel Destination" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl text-white">Welcome to our Travel Agency</h1>
          </div>
        </section>

        {/* Add your sections here */}
      </main>
    </>
  );
};

export default GeneratedComponent;