import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-indigo-500 text-white text-center py-6">
        <img src="https://picsum.photos/seed/87/300/300" alt="Bank Logo" className="w-1/3 mx-auto" />
      </header>
      <nav className="bg-indigo-400 text-white text-center py-4">
        <ul className="flex justify-around">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <main className="py-8">
        <section className="text-center">
          <h1 className="text-4xl mb-4">Welcome to Our Banking Institution</h1>
          <p className="text-xl mb-8">We provide professional and secure banking services.</p>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
            Learn More
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;