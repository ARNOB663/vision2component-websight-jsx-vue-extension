import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to our Travel Agency</h1>
        <p className="text-center mb-8">
          We are a dynamic, engaging design that immerses the user in travel experiences. A prominent search bar and filtering options allow users to explore destinations and activities easily. A hero image of a beautiful travel location sets the tone, while the navigation is horizontally positioned beneath it.
        </p>
        <img src="https://static.photos/travel/900x600/99.webp" alt="Travel Image" className="mb-8" />
        <div className="flex flex-col items-center justify-center">
          <input type="text" placeholder="Search destinations" className="w-full max-w-md p-2 mb-4" />
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;