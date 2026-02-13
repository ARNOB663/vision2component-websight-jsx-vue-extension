import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-500 text-white p-4">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-2xl">Travel Agency</h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>Destinations</li>
              <li>Flights</li>
              <li>Hotels</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <section className="mb-4">
          <img src="https://static.photos/travel/900x600/50.webp" alt="Travel Banner" className="w-full" />
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Destinations</h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://static.photos/travel/900x600/51.webp" alt="Beach" className="w-full" />
            <img src="https://static.photos/travel/900x600/52.webp" alt="Mountain" className="w-full" />
            <img src="https://static.photos/travel/900x600/53.webp" alt="City" className="w-full" />
            {/* Add more images as needed */}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Search Flights and Hotels</h2>
          <form className="flex space-x-2">
            <input type="text" placeholder="Search..." className="flex-1 p-2" />
            <button type="submit" className="bg-gray-500 text-white p-2">Search</button>
          </form>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Newsletter Sign-up</h2>
          <form className="flex space-x-2">
            <input type="email" placeholder="Enter your email..." className="flex-1 p-2" />
            <button type="submit" className="bg-gray-500 text-white p-2">Sign Up</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-500 text-white p-4 text-center">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;