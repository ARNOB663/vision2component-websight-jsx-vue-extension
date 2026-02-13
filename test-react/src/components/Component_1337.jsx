import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="w-full">
        <img src="https://static.photos/real-estate/900x600/139.webp" alt="Real Estate Header Image" className="w-full" />
      </header>

      <nav className="bg-green-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Seller Resources</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <input type="text" placeholder="Search properties..." className="border border-gray-300 p-2 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
          {/* Property listings go here */}
        </div>
      </div>

      <footer className="bg-green-500 text-white p-4 text-center">
        <p>Real Estate Company is a leading provider of real estate services. We have a wide range of properties for sale and rental. Our team of experienced realtors is always ready to assist you in finding the perfect home or property. Contact us today for more information.</p>
        <ul className="flex space-x-4 justify-center pt-4">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Seller Resources</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;