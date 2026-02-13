import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex justify-center items-center p-6 bg-white">
        <img src="https://static.photos/architecture/300x300/150.webp" alt="Logo" className="h-10" />
        <nav className="ml-10">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-12">
          <h1 className="text-4xl text-center font-bold mb-6">Welcome to Our Architecture Firm</h1>
          <p className="text-center">
            We are a full-service architecture firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are functional, beautiful, and sustainable. We believe in the power of design to transform the world around us.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl text-center font-bold mb-6">Our Services</h2>
          {/* Add your services here */}
        </section>

        <section className="my-12">
          <h2 className="text-3xl text-center font-bold mb-6">Our Projects</h2>
          {/* Add your projects here */}
        </section>
      </main>

      <footer className="bg-white p-6 text-center">
        <p className="text-gray-600">© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;