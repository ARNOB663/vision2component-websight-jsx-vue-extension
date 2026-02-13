import React from 'react';

const PropertyCard = ({ imageUrl, title, price }) => (
  <div className="bg-white p-4 rounded shadow">
    <img src={imageUrl} alt={title} className="mb-4" />
    <h2 className="text-xl mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">${price}</p>
    <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Details</a>
  </div>
);

const GeneratedComponent = () => (
  <>
    <header className="bg-white p-4 flex justify-center">
      <img src="https://picsum.photos/seed/389/300/300" alt="Real Estate Logo" className="h-10" />
    </header>
    <nav className="bg-white p-4 flex justify-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">Properties</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
    </nav>
    <main className="p-4">
      <h1 className="text-2xl text-center mb-4">Welcome to our Real Estate Company</h1>
      <p className="text-center mb-8">We are a leading real estate company with a reputation for excellence. Our team of experienced professionals is dedicated to providing you with the best possible service. Whether you're looking for a new home, a rental property, or commercial space, we have the resources and expertise to help you find your dream property.</p>
      <div className="grid grid-cols-3 gap-4">
        <PropertyCard imageUrl="https://picsum.photos/seed/389/900/600" title="Property 1" price="1,000,000" />
        {/* Repeat the above div for each property */}
      </div>
    </main>
  </>
);

export default GeneratedComponent;