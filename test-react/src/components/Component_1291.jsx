import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://static.photos/business/300x300/93.webp" alt="Logo" className="h-10" />
          <nav className="ml-6">
            <ul className="flex">
              <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="mr-4 p-2 border border-gray-400 rounded" />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </header>
      <main className="p-4">
        <h1 className="text-2xl mb-4">Welcome to Our Tech Company</h1>
        <p className="mb-4">
          At our tech company, we are dedicated to providing innovative and efficient solutions for all your technology needs. We specialize in a wide range of services, from software development to cybersecurity, and we are committed to delivering the best possible results for our clients.
        </p>
        <p>
          Our team of experienced professionals is always ready to assist you with your technology needs. Whether you need help with a new software project, or you need advice on how to secure your data, we are here to help.
        </p>
      </main>
      <footer className="bg-white p-4 flex justify-between items-center">
        <div>
          <p>© 2022 Tech Company. All rights reserved.</p>
        </div>
        <div className="flex">
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;