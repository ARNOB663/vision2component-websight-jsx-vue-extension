import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6">
        <img src="https://static.photos/real-estate/900x600/149.webp" alt="Real Estate Image" className="w-full h-64 object-cover" />
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Properties
          </button>
        </div>
      </header>

      <nav className="bg-white p-6">
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Services</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">About Us</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact Us</a></li>
        </ul>
      </nav>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Real Estate Company</h1>
        <p className="text-lg mb-6">
          At our real estate company, we are committed to providing our clients with the best possible service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a new home, selling your current one, or investing in real estate, we have the resources and expertise to help you.
        </p>
        {/* Add more content here */}
      </main>

      <footer className="bg-white p-6">
        <p className="text-center">
          © 2022 Real Estate Company. All rights reserved.
        </p>
        <p className="text-center">
          Contact us: info@realestatecompany.com
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;