import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-pink-100">
      <header className="relative">
        <img src="https://picsum.photos/seed/16/900/600" alt="Header Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://picsum.photos/seed/16/300/300" alt="Logo" className="h-16" />
        </div>
      </header>
      <nav className="bg-pink-500 text-white text-center py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="hover:text-pink-200">Home</a></li>
          <li><a href="#" className="hover:text-pink-200">Services</a></li>
          <li><a href="#" className="hover:text-pink-200">About Us</a></li>
          <li><a href="#" className="hover:text-pink-200">Contact</a></li>
        </ul>
      </nav>
      <main className="max-w-screen-lg mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl text-center">Welcome to Our IT Services Company</h2>
          <p className="text-center mt-4">
            We are a trusted and reliable IT services company dedicated to providing top-notch solutions for your business needs. With our team of experienced professionals, we ensure that your IT infrastructure is always up-to-date and secure. We offer a wide range of services, from software development and IT consulting to network setup and maintenance. Our goal is to help you grow and succeed in the digital world.
          </p>
          <button className="block mx-auto mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
        <section className="my-8">
          <h2 className="text-2xl text-center">Our Services</h2>
          {/* Add your services here */}
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;