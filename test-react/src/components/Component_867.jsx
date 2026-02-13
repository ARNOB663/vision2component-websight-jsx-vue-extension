import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/68.webp')" }}>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mt-0 mb-2">Welcome to our Travel Agency</h1>
            <p className="text-2xl text-white">Discover the world with us</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Our Popular Destinations</h2>
          {/* Add your destinations here */}
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Travel Deals and Services</h2>
          {/* Add your deals and services here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="container mx-auto px-6 md:px-12">
          <p className="mb-2">&copy; 2022 Travel Agency. All rights reserved.</p>
          <nav>
            <ul className="flex justify-center">
              <li className="mx-2"><a href="#" className="text-white hover:text-gray-300">Terms and Conditions</a></li>
              <li className="mx-2"><a href="#" className="text-white hover:text-gray-300">Travel Insurance</a></li>
              <li className="mx-2"><a href="#" className="text-white hover:text-gray-300">Customer Support</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;