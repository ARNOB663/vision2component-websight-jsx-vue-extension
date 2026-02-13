import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/architecture/300x300/21.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="py-8">
        <section className="container mx-auto">
          <h1 className="text-4xl text-center mb-8">Welcome to Our Architecture Firm</h1>
          <p className="text-center mb-8">
            We are a team of experienced architects dedicated to creating beautiful, functional spaces that reflect the unique needs and aspirations of our clients. Our portfolio showcases a diverse range of projects, from modern residences to traditional homes, from commercial buildings to public spaces. We believe in the power of design to transform the world around us, and we are committed to using our skills and expertise to make a positive impact on the world.
          </p>
        </section>

        <section className="container mx-auto grid grid-cols-3 gap-4">
          {/* Add your portfolio items here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;