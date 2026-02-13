import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <img src="https://picsum.photos/seed/36/900/600" alt="Header Image" className="w-full h-64 object-cover" />
        <h1 className="text-4xl font-bold mt-8">Welcome to Our Real Estate Agency</h1>
        <p className="text-lg mt-4 text-center">We are a trusted real estate agency with a reputation for excellence. We specialize in finding the perfect home for you. Whether you're looking for a luxury home, a cozy starter home, or a vacation home, we've got you covered.</p>
      </div>
      <div className="flex flex-col md:flex-row mt-12">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
          <p className="text-lg">Check out our featured listings. We have a wide variety of properties to choose from.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View Listings</button>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg">Hear what our clients have to say about our services.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read Testimonials</button>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg">Learn more about our real estate agency.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">Ready to find your dream home? Contact us today.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
      </div>
    </div>
  );
};

export default GeneratedComponent;