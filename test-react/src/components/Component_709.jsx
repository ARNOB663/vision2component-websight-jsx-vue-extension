import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-lg font-bold">Home Improvement Store</a>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Products</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Home Improvement Store</h1>
        <p className="mb-4">
          At Home Improvement Store, we specialize in providing high-quality home improvement products. Our products are designed to make your home more comfortable, stylish, and functional. We offer a wide range of products, from kitchen appliances to home decor items. Whether you're looking for a new sofa, a new kitchen countertop, or a new bathroom vanity, we have something for everyone.
        </p>
        {/* Add your product images here */}
      </main>

      <footer className="bg-white p-4 shadow mt-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-500">Customer Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;