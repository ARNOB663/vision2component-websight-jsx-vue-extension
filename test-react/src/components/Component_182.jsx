import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to our Automotive Site</h1>
        <p className="mt-2">We are a leading provider of high-quality automotive services. Our team of experts is dedicated to providing you with the best service possible. Whether you're looking for a new car, a used car, or a car part, we're here to help.</p>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-red-500 hover:text-red-700">Home</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">About</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">Services</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-700">Contact</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Our Cars</h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://picsum.photos/seed/182/900/600" alt="Car" className="rounded"/>
            <img src="https://picsum.photos/seed/182/900/600" alt="Car" className="rounded"/>
            <img src="https://picsum.photos/seed/182/900/600" alt="Car" className="rounded"/>
          </div>
        </section>
      </main>

      <footer className="bg-red-500 text-white p-4">
        <p>Contact us: info@automotivesite.com</p>
        <p>Business hours: Monday to Friday, 9am to 5pm</p>
        <p>Company awards: Best Automotive Service Provider 2022</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;