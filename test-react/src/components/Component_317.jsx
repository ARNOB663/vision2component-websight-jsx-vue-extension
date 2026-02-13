import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-purple-100">
      <header className="relative">
        <img src="https://picsum.photos/seed/317/900/600" alt="Header Image" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img src="https://picsum.photos/seed/317/300/300" alt="Logo" className="w-16 h-16" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-wrap">
        <nav className="w-full md:w-1/4 p-4">
          <h2 className="text-2xl mb-4">Navigation</h2>
          <ul>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Home</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">About</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Services</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Contact</a></li>
          </ul>
        </nav>

        <section className="w-full md:w-3/4 p-4">
          <h1 className="text-3xl mb-4">Welcome to Our Tech Company</h1>
          <p className="text-lg mb-4">
            At our tech company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations. Whether you're looking for a new software solution, a custom-built system, or a consultation on the latest technology trends, we're here to help.
          </p>
          <p className="text-lg mb-4">
            We believe in the power of technology to transform businesses and improve lives. That's why we're committed to staying at the forefront of the latest advancements in technology, constantly researching and developing new products and services that are designed to meet the needs of today's businesses.
          </p>
          <p className="text-lg mb-4">
            Contact us today to learn more about how we can help you achieve your business goals.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;