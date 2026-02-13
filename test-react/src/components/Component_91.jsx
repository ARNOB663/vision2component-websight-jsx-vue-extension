import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://picsum.photos/seed/91/300/300" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Packages</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="py-8">
        <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/91/1600/900')" }}></div>
        {/* Carousel of travel packages goes here */}
      </main>

      <footer className="bg-white p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600">© 2022 Travel Agency. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;