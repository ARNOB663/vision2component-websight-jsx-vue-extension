import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to our Automotive Parts Store</h1>
        <p className="my-2">We offer a wide range of high-quality automotive parts for all your vehicle needs. Whether you're looking for a new tire, a new brake pad, or a new engine, we've got you covered.</p>
        <button className="bg-white text-yellow-500 px-4 py-2 rounded">Order Now</button>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Home</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Products</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-700">About Us</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Contact Us</a></li>
        </ul>
      </nav>

      <div className="flex p-4">
        <aside className="w-1/4 bg-white p-4">
          <h2 className="text-xl font-bold">Categories</h2>
          <ul className="mt-2">
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Tires</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Brakes</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Engines</a></li>
          </ul>
        </aside>

        <main className="w-3/4 bg-white p-4">
          <h2 className="text-xl font-bold">Featured Parts</h2>
          {/* Add your featured parts here */}
        </main>
      </div>

      <footer className="bg-yellow-500 text-white p-4">
        <p>© 2022 Automotive Parts Store. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Manufacturer Certifications</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Customer Reviews</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Company History</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;