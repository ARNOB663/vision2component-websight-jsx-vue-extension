import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-white">Welcome to our Travel Agency</h1>
          <p className="text-xl text-white">Discover the world with us</p>
          <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded">Book Now</button>
        </div>
        <div className="absolute bottom-0 w-full">
          {/* Slideshow images here */}
        </div>
      </div>

      <nav className="flex justify-center p-4 bg-white">
        <ul className="flex space-x-8">
          <li><a href="#" className="text-blue-500">Destinations</a></li>
          <li><a href="#" className="text-blue-500">Testimonials</a></li>
          <li><a href="#" className="text-blue-500">Policy</a></li>
        </ul>
      </nav>

      <footer className="p-4 mt-4 bg-white">
        <p className="text-center text-gray-500">© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;