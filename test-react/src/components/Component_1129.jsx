import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-500 text-white">
      <header className="flex justify-between items-center p-4">
        <img src="https://static.photos/art/300x300/131.webp" alt="Bank Logo" />
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About</a></li>
            <li><a href="#" className="hover:text-yellow-300">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-4xl mb-4">Welcome to Our Banking Institution</h1>
        <p className="mb-4">
          At our banking institution, we are committed to providing our customers with the highest level of service and the most secure banking experience. Our team of dedicated professionals is here to help you every step of the way. Whether you're looking for a new account, need to apply for a loan, or just want to keep your money safe and secure, we're here to help.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="#" className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">Open Account</a>
          <a href="#" className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">Apply for Loan</a>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;