import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative">
        <img src="https://static.photos/architecture/900x600/188.webp" alt="Header Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://static.photos/architecture/300x300/189.webp" alt="Logo" className="h-16" />
        </div>
      </header>

      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Projects</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center mb-8">Welcome to Our Architecture Firm</h2>
        <p className="text-lg text-center mb-8">
          We are a professional architecture firm dedicated to creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning, functional designs. We believe in the power of design to transform spaces and create lasting impressions. Whether you're looking for a new home, a commercial building, or a renovation project, we're here to help.
        </p>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4">
            <img src="https://static.photos/architecture/900x600/190.webp" alt="Project 1" className="w-full" />
            <h3 className="text-xl mt-2">Project 1</h3>
          </div>
          {/* Repeat the above div for each project */}
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;