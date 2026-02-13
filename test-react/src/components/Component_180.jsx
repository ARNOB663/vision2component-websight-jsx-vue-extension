import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="Search properties..." className="w-1/2 px-4 py-2 rounded-lg" />
          <div className="flex">
            <button className="px-4 py-2 mr-2 bg-yellow-500 text-white rounded-lg">For Sale</button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">For Rent</button>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 pr-4">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul>
              <li className="mb-2">Apartment</li>
              <li className="mb-2">House</li>
              <li className="mb-2">Condo</li>
            </ul>
            <h2 className="text-lg font-bold mb-4 mt-8">Locations</h2>
            <ul>
              <li className="mb-2">New York</li>
              <li className="mb-2">Los Angeles</li>
              <li className="mb-2">Chicago</li>
            </ul>
          </div>
          <div className="w-3/4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <img src="https://picsum.photos/seed/180/900/600" alt="House" className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-bold mb-2">Beautiful House for Sale</h2>
                <p className="text-gray-600">This is a beautiful house located in the heart of downtown. It has 3 bedrooms and 2 bathrooms. It's perfect for a family.</p>
              </div>
              {/* Repeat the above div for each property */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;