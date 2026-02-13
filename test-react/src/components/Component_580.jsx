import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 h-96 flex items-center justify-center">
        <h1 className="text-white text-4xl">Welcome to Our Technology Company</h1>
      </header>

      <nav className="bg-yellow-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto p-4">
        <section className="flex space-x-4">
          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Services</h2>
            <p>We offer a wide range of services including software development, data analysis, and cybersecurity.</p>
          </div>

          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Solutions</h2>
            <p>We provide innovative solutions to meet your business needs. Our solutions are tailored to your specific needs.</p>
          </div>

          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Testimonials</h2>
            <p>See what our customers are saying about our services and solutions.</p>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-500 text-white p-4 text-center">
        <p>© 2022 Our Technology Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;