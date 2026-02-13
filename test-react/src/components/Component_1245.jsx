import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <img src="https://static.photos/business/300x300/47.webp" alt="Logo" className="h-10" />
        <input type="text" placeholder="Search..." className="px-4 py-2 rounded-full" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="#products" className="text-gray-600 hover:text-gray-800">Products</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>Write a real and long sentences about the business here.</p>
        </section>

        <section id="products" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <p>Write a real and long sentences about the products here.</p>
        </section>

        <section id="services">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p>Write a real and long sentences about the services here.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;