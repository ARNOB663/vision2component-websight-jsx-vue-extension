import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center">
          <img src="https://static.photos/cars/300x300/60.webp" alt="Company Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-red-500">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-500">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-500">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-red-500">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="mt-8">
          <section className="flex flex-col items-center">
            <img src="https://static.photos/cars/900x600/61.webp" alt="Car Image" className="w-full h-64 object-cover" />
            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Get a Quote
            </button>
          </section>
        </main>

        <footer className="mt-8 text-center text-gray-600">
          <p>© 2022 Automotive Insurance Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default GeneratedComponent;