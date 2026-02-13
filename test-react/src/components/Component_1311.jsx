import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-earth text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Real Estate Company</h1>
          <p className="text-lg">Welcome to our Real Estate Company, where we specialize in finding your dream home. We have a wide selection of properties for sale, ranging from luxury apartments to cozy cottages. Our team of experienced realtors is dedicated to providing you with the best service possible. Whether you're looking for a new home, a vacation property, or a rental property, we're here to help.</p>
        </header>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            {/* Grid of property images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64"></div>
              <div className="bg-gray-300 h-64"></div>
              <div className="bg-gray-300 h-64"></div>
              <div className="bg-gray-300 h-64"></div>
            </div>
          </div>
          <div className="col-span-1">
            {/* Sidebar with search filters */}
            <div className="bg-gray-300 p-4">
              <input type="text" placeholder="Search..." className="w-full p-2 mb-4 border rounded" />
              <select className="w-full p-2 mb-4 border rounded">
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="cottage">Cottage</option>
              </select>
              <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Search</button>
            </div>
          </div>
        </div>
        <footer className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Phone: 123-456-7890</p>
          <p className="text-lg">Email: info@realestatecompany.com</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Testimonials</h2>
          <p className="text-lg">"I was so happy with my new home. The realtors were very professional and the process was smooth. I would definitely recommend them to anyone." - John Doe</p>
        </footer>
      </div>
    </div>
  );
};

export default GeneratedComponent;