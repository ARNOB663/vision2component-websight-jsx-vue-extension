import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://static.photos/business/900x600/38.webp" alt="Food Image" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to our Food Blog</h1>
            <p className="text-lg mb-4">
              We are a food company dedicated to providing the best food in the world. Our mission is to make food accessible and enjoyable for everyone. We believe that food is not just a meal, but a passion.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img src="https://static.photos/business/900x600/39.webp" alt="Blog Image" className="w-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
            <p className="text-gray-700 mb-2">
              Author: John Doe
            </p>
            <p className="text-gray-700">
              Date: 01/01/2020
            </p>
          </div>
          {/* Repeat the above div for each blog post */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;