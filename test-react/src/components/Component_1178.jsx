import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="relative">
        <div className="flex overflow-x-auto">
          <div className="w-full p-4">
            <img src="https://static.photos/real-estate/900x600/180.webp" alt="House" className="w-full" />
            <p className="text-center">This is a beautiful house.</p>
            <button className="block mx-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
          {/* Add more slides here */}
        </div>
      </header>

      <div className="flex justify-center mt-8">
        <img src="https://static.photos/real-estate/300x300/181.webp" alt="Logo" className="h-16" />
      </div>

      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 p-4">
            <img src="https://static.photos/real-estate/900x600/182.webp" alt="Apartment" className="w-full" />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h2 className="text-xl font-bold mb-2">Apartment for Sale</h2>
            <p className="mb-4">This is a spacious apartment with 3 bedrooms and 2 bathrooms. It's perfect for a family.</p>
            <p className="font-bold">$500,000</p>
          </div>
          {/* Add more properties here */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;