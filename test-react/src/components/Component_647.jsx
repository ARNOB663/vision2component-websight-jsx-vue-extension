import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white p-4 flex justify-center">
        <img src="https://static.photos/business/300x300/49.webp" alt="Logo" className="h-10" />
      </header>

      <nav className="bg-green-500 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="bg-gray-200 p-4 flex justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Tech Company</h1>
          <p className="mb-4">At our tech company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Learn More</button>
        </div>
      </section>

      <section className="bg-white p-4 flex">
        <div className="w-1/4">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          {/* Add blog posts here */}
        </div>
        <div className="w-3/4">
          <img src="https://static.photos/business/900x600/50.webp" alt="Hero Image" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;