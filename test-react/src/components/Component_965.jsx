import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <img className="h-8 w-auto sm:h-10" src="https://static.photos/fashion/300x300/167.webp" alt="Logo" />
            </div>
            <nav className="flex items-center">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Products</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 p-4">
            <h2 className="text-lg font-medium mb-4">Product Categories</h2>
            {/* Add your product categories here */}
          </aside>

          <div className="w-full lg:w-3/4 p-4">
            <h1 className="text-2xl font-medium mb-4">Product Listings</h1>
            {/* Add your product listings here */}
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600">© 2022 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;