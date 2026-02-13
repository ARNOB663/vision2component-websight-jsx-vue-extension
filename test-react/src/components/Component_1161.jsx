import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <div className="relative">
        <img src="https://static.photos/real-estate/900x600/163.webp" alt="Real Estate Image" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Welcome to Our Real Estate Agency</h1>
        </div>
      </div>

      <nav className="bg-white px-6 py-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-900 hover:text-red-500">Home</a></li>
          <li><a href="#" className="text-gray-900 hover:text-red-500">Properties</a></li>
          <li><a href="#" className="text-gray-900 hover:text-red-500">Blog</a></li>
          <li><a href="#" className="text-gray-900 hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Search for Properties</h2>
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
          {/* Add your featured listings here */}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          {/* Add your blog posts here */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;