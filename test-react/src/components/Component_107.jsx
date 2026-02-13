import React from 'react';

const GeneratedComponent = () => (
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    {/* Navigation */}
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tech Company</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <div className="relative">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="https://picsum.photos/seed/107/900/600" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl text-white font-bold">Welcome to Tech Company</h1>
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">
        At Tech Company, we are dedicated to providing innovative and high-quality products and services to our customers. Our mission is to make technology accessible and affordable for everyone. We believe in the power of technology to transform lives and businesses.
      </p>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  </div>
);

export default GeneratedComponent;