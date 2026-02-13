import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8">
      <img src="https://static.photos/fashion/900x600/19.webp" alt="Banner Image" className="w-full" />
      <nav className="flex justify-center mt-8">
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Products</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>
      <div className="flex mt-8">
        <div className="w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul>
            <li><a href="#" className="text-gray-800 hover:text-gray-600">Electronics</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600">Clothing</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600">Books</a></li>
          </ul>
        </div>
        <div className="w-2/4 px-4">
          <h2 className="text-xl font-bold mb-4">Featured Products</h2>
          {/* Add your products here */}
        </div>
        <div className="w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {/* Add your filters here */}
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default GeneratedComponent;