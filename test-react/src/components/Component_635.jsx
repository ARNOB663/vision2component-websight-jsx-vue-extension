import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="flex items-center justify-between p-4 bg-white">
        <img src="https://static.photos/business/300x300/37.webp" alt="Logo" className="h-10" />
        <nav className="flex items-center">
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Contact</a>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Tech Company</h1>
        <p className="mb-4">
          At our tech company, we are dedicated to providing innovative and reliable solutions for all your technology needs. Our team of experts is committed to delivering the best possible service to our clients. Whether you're looking for a new website, a custom software solution, or a consultation on the latest technology trends, we're here to help.
        </p>
        <div className="flex justify-center">
          <input type="text" placeholder="Search..." className="px-4 py-2 rounded-l" />
          <button className="px-4 py-2 bg-purple-500 text-white rounded-r">Search</button>
        </div>
      </main>

      <footer className="p-4 bg-white text-center text-gray-800">
        © 2022 Tech Company. All rights reserved.
      </footer>
    </div>
  );
};

export default GeneratedComponent;