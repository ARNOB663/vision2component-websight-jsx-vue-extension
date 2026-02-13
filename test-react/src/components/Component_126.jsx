import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative bg-gray-100">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://picsum.photos/seed/126/900/600" alt="Travel Destination" />
        </div>
        <nav className="relative flex items-center justify-between px-4 py-6">
          <a href="#" className="text-xl font-bold text-white">Travel Agency</a>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Destinations</a>
            <a href="#" className="text-white hover:text-gray-300">About Us</a>
            <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
          </div>
        </nav>
        <div className="absolute inset-0 flex items-center justify-center">
          <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-bold text-center text-gray-800">Find Your Next Adventure</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="destination">Destination</label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="destination" type="text" placeholder="Where do you want to go?" />
            </div>
            <div className="mb-6 text-center">
              <button className="w-full px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-pink-700 focus:outline-none focus:shadow-outline" type="button">Search</button>
            </div>
          </form>
        </div>
      </header>
      <footer className="p-6 text-white bg-gray-800">
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
            <ul>
              <li><a href="#" className="text-pink-200 hover:text-white">Destinations</a></li>
              <li><a href="#" className="text-pink-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-pink-200 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <p>123 Main St<br />Anytown, USA 12345<br /> (123) 456-7890<br /> info@travelagency.com</p>
          </div>
        </div>
        <p className="text-center">© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;