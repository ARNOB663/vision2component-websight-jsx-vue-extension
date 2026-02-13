import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/architecture/300x300/108.webp" alt="Company Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="mt-8">
        <section className="relative">
          <img src="https://static.photos/architecture/900x600/109.webp" alt="Architectural Design" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Welcome to Our Architecture Firm</h1>
          </div>
        </section>

        <section className="mt-8 px-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4">
            We are a leading architecture firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, functional spaces. We believe in the power of design to transform the world and we are committed to making a difference in the world of architecture.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <p>© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;