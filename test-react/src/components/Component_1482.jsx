import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl text-center font-bold mb-10">Welcome to Our Real Estate Company</h1>
        <p className="text-center mb-10">
          At our real estate company, we are committed to providing our clients with the best possible service. We understand that buying or selling a property can be a big decision, which is why we offer a wide range of properties to choose from. Whether you're looking for a luxury home, a cozy apartment, or a spacious office space, we have something for everyone. Our team of experienced real estate professionals is dedicated to helping you find the perfect property that fits your needs and budget.
        </p>
        <div className="w-full mb-10">
          {/* Image slider goes here */}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://static.photos/real-estate/900x600/84.webp" alt="House" className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">Luxury House</h2>
            <p className="mb-4">This luxurious house is perfect for those who want to enjoy the best of life.</p>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              More Details
            </button>
          </div>
          {/* More property cards go here */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;