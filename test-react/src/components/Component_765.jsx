import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="w-full">
        <img src="https://static.photos/architecture/900x600/167.webp" alt="Architecture" className="w-full" />
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      <main className="py-8">
        <h1 className="text-4xl text-center font-bold mb-8">Welcome to Our Architecture Firm</h1>

        <p className="text-center mb-8">
          We are a full-service architecture firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful, but also functional and sustainable.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="hover:opacity-75">
            <img src="https://static.photos/architecture/900x600/168.webp" alt="Building" className="w-full" />
            <h2 className="text-2xl font-bold mt-4">Building Project</h2>
          </div>
          {/* Add more portfolio items here */}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>123 Main St</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@architecturefirm.com</p>
          </div>
          {/* Add map and contact form here */}
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;