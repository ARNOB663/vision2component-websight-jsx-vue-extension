import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white px-6 py-4">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-800 hover:text-gray-500">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-500">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-500">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-500">Portfolio</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Construction Company</h1>
        <p className="text-gray-600 mb-8">
          We are a rugged and sophisticated construction company that specializes in creating unique and high-quality structures. Our team of experienced professionals uses the latest technology and materials to ensure that every project is completed to the highest standards.
        </p>

        {/* Add your project images here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://picsum.photos/900/600?image=127" alt="Project 1" className="w-full h-full object-cover rounded-lg shadow-md" />
          <img src="https://picsum.photos/900/600?image=128" alt="Project 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          <img src="https://picsum.photos/900/600?image=129" alt="Project 3" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

      </main>

      <footer className="bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Residential Construction</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Commercial Construction</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Renovation</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Phone: 123-456-7890<br />
            Email: info@ourconstructioncompany.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;