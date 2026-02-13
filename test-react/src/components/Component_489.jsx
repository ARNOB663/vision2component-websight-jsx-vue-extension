import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <nav className="flex justify-between items-center">
          <div>
            <img src="https://static.photos/business/300x300/91.webp" alt="Company Logo" className="h-10" />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Tech Company</h1>
        <p className="mb-4">
          At our tech company, we are dedicated to providing innovative and cutting-edge solutions to meet the needs of our clients. Our team of experts is committed to delivering high-quality products and services that exceed our clients' expectations. We are passionate about technology and are always looking for new ways to improve and innovate.
        </p>
        {/* Add more content here */}
      </main>

      <footer className="bg-white p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Social Media</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;