import React, { useState } from 'react';

const GeneratedComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-100">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="https://static.photos/business/900x600/50.webp" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to our Tech Company</h1>
      </div>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold">Tech Company</a>
          <div className={isMenuOpen ? "block md:hidden" : "hidden md:block"}>
            <a href="#" className="px-2 py-1 text-gray-600 hover:text-black">Home</a>
            <a href="#" className="px-2 py-1 text-gray-600 hover:text-black">About</a>
            <a href="#" className="px-2 py-1 text-gray-600 hover:text-black">Services</a>
            <a href="#" className="px-2 py-1 text-gray-600 hover:text-black">Contact</a>
          </div>
          <div className={isMenuOpen ? "block md:hidden" : "hidden md:hidden"}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GeneratedComponent;