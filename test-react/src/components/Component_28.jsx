import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white p-6">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Projects</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>

      <div className="flex p-6">
        <div className="w-1/4 p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            We are a leading architecture firm specializing in residential and commercial projects. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful but also functional and sustainable.
          </p>
        </div>

        <div className="w-3/4 p-6">
          <h1 className="text-3xl font-bold mb-4">Our Past Projects</h1>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/28/900/600" alt="Architecture" />
            <img src="https://picsum.photos/seed/28/900/600" alt="Interior" />
            <img src="https://picsum.photos/seed/28/900/600" alt="Exterior" />
            <img src="https://picsum.photos/seed/28/900/600" alt="Urban" />
          </div>
        </div>
      </div>

      <footer className="bg-white p-6">
        <form className="mb-4">
          <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded" />
          <button type="submit" className="bg-red-500 text-white p-2 rounded">Subscribe</button>
        </form>
        <p className="text-gray-600">© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };