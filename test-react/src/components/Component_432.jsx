import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-white text-center py-12">
        <img src="https://static.photos/technology/300x300/34.webp" alt="Logo" className="w-32 h-32 mx-auto" />
        <nav className="mt-6">
          <ul className="flex justify-center space-x-6">
            <li><a href="#about" className="text-gray-500 hover:text-gray-700">About</a></li>
            <li><a href="#services" className="text-gray-500 hover:text-gray-700">Services</a></li>
            <li><a href="#contact" className="text-gray-500 hover:text-gray-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-lg text-gray-600">We are a technology company dedicated to providing innovative solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations.</p>
        </div>
      </section>

      <section id="services" className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <p className="text-lg text-gray-600">We offer a wide range of services including software development, web design, mobile app development, and more. Our team of experts is skilled in a variety of technologies and is always ready to help you find the best solution for your needs.</p>
        </div>
      </section>

      <section id="contact" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-lg text-gray-600">We would love to hear from you. Please contact us using the information below.</p>
          <p className="text-lg text-gray-600">Phone: 123-456-7890</p>
          <p className="text-lg text-gray-600">Email: info@techcompany.com</p>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;