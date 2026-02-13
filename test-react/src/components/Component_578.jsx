import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <img src="https://static.photos/real-estate/300x300/180.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/real-estate/1600x900/179.webp')" }}>
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Real Estate Company</h1>
        <p className="text-xl text-white mb-8">We are a leading real estate company specializing in finding your dream home. With our extensive network of properties, we guarantee to find the perfect match for you.</p>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                Search for a property
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search..." />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;