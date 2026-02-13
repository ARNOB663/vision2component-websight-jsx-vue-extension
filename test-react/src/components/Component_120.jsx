import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-center">
        <img src="https://picsum.photos/seed/120/300/300" alt="Law Firm Logo" className="h-16" />
      </header>

      <section className="bg-red-500 text-white p-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4">Welcome to Our Law Firm</h1>
        <p className="text-xl mb-8">We provide professional legal services to help you navigate the legal landscape.</p>
        <button className="bg-white text-red-500 px-4 py-2 rounded">Contact Us</button>
      </section>

      <nav className="bg-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-red-500 hover:text-red-700">Home</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">Practice Areas</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">About Us</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">Contact</a></li>
        </ul>
      </nav>

      <main className="p-8">
        <h2 className="text-2xl mb-4">Our Practice Areas</h2>
        <p className="mb-4">We offer a wide range of legal services including:</p>
        <ul className="list-disc pl-8">
          <li>Criminal Law</li>
          <li>Family Law</li>
          <li>Corporate Law</li>
          <li>Immigration Law</li>
        </ul>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>Contact us at:</p>
        <p>123 Main St, Anytown, USA</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@ourlawfirm.com</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;