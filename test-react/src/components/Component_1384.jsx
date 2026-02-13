import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white relative min-h-screen overflow-hidden">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="https://static.photos/technology/900x600/186.webp" type="video/mp4" />
      </video>
      <nav className="sticky top-0 bg-gray-800 p-4 flex justify-between">
        <div>
          <a href="#" className="text-indigo-400 hover:text-white">Home</a>
          <a href="#" className="text-indigo-400 hover:text-white ml-4">About</a>
          <a href="#" className="text-indigo-400 hover:text-white ml-4">Services</a>
          <a href="#" className="text-indigo-400 hover:text-white ml-4">Contact</a>
        </div>
        <div>
          <a href="#" className="text-indigo-400 hover:text-white">Login</a>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Tech Company</h1>
          <p className="text-2xl mb-8">We are a leading provider of innovative technology solutions. Our mission is to empower businesses with the tools they need to succeed in the digital age.</p>
          <a href="#" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;