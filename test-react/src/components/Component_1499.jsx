import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-purple-200">
      <header className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to our Travel Agency</h1>
        <p className="mt-4">We are a team of travel experts who are passionate about helping you discover the world.</p>
      </header>
      <main className="py-16">
        <section className="text-center">
          <h2 className="text-3xl mb-8">Our Destinations</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 p-4">
              <img src="https://static.photos/travel/900x600/101.webp" alt="Beach" />
              <h3 className="text-2xl mt-4">Beach Destinations</h3>
              <p className="mt-2">Discover the best beaches in the world.</p>
            </div>
            <div className="w-1/2 p-4">
              <img src="https://static.photos/travel/900x600/102.webp" alt="Mountain" />
              <h3 className="text-2xl mt-4">Mountain Destinations</h3>
              <p className="mt-2">Explore the breathtaking mountains.</p>
            </div>
            {/* Add more destinations as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;