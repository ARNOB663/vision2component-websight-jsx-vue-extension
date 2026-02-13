import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://static.photos/business/300x300/90.webp" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            {/* Add your products here */}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            {/* Add your services here */}
          </div>
        </div>
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">© 2022 Tech Company Portal. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;